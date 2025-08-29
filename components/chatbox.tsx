import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/database.types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

type Message = Database['public']['Tables']['messages']['Row'];

export function ChatMessage() {
  // Persistent session ID
  const [sessionId] = useState<string>(() => {
    let session = localStorage.getItem('chatSessionId');
    if (!session) {
      session = uuidv4();
      localStorage.setItem('chatSessionId', session);
    }
    return session;
  });

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [name, setName] = useState<string>(() => localStorage.getItem('chatName') || '');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setChatOpen(!chatOpen);

  const handleNameChange = (value: string) => {
    setName(value);
    localStorage.setItem('chatName', value.trim());
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Fetch initial messages
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: true });
    if (error) console.error('Error fetching messages:', error);
    else setMessages(data);
  };

  // Set up real-time subscription
  useEffect(() => {
    fetchMessages();

    const subscription = supabase
      .channel('public:messages')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, (payload) => {
        const incoming = payload.new as Message;
        setMessages((prev) => {
          if (prev.some((m) => m.id === incoming.id)) return prev;
          return [...prev, incoming];
        });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  // Send message
  const sendMessage = async () => {
    const trimmedName = name.trim();
    const trimmedText = input.trim();
    if (!trimmedName || !trimmedText) return;

    const newMessage: Database['public']['Tables']['messages']['Insert'] = {
      name: trimmedName,
      text: trimmedText,
      sender: trimmedName,
      session_id: sessionId,
    };

    // Optimistic message
    setMessages((prev) => [
      ...prev,
      {
        ...newMessage,
        id: Date.now(),
        created_at: new Date().toISOString(),
      } as Message,
    ]);

    setInput('');

    const { error } = await supabase.from('messages').insert([newMessage]);
    if (error) console.error('Error sending message:', error);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-end space-y-2">
      {/* Floating Chat Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={toggleChat}
        className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 bg-transparent transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-5 w-5 text-primary" />
      </Button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-4 left-4 transition-all duration-300 ${
          chatOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col bg-background/90 backdrop-blur-md border border-primary/20 rounded-xl shadow-lg w-[20rem] sm:w-[24rem] h-[32rem] overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 border-b border-primary/20 bg-primary/5">
            <span className="font-semibold text-primary">Leave a Message</span>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="rounded-full">
              <X className="h-4 w-4 text-primary" />
            </Button>
          </div>

          {/* Name Input */}
          <div className="p-3 border-b border-primary/20">
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-4 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.session_id === sessionId ? 'items-end' : 'items-start'
                }`}
              >
                <span
                  className={`mb-1 text-xs font-medium ${
                    msg.session_id === sessionId ? 'text-primary' : 'text-gray-500'
                  }`}
                >
                  {msg.session_id === sessionId ? 'You' : msg.sender || 'Bot'}
                </span>
                <div
                  className={`px-3 py-2 rounded-lg max-w-[80%] ${
                    msg.session_id === sessionId
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-primary/10 text-primary rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-primary/20 flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button onClick={sendMessage} className="px-3">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
