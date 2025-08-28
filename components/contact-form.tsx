'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, Phone, Globe, Send } from 'lucide-react';

export type StyleMode = 'normal' | 'game';

interface ContactFormProps {
  styleMode: StyleMode;
}

export function ContactForm({ styleMode }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    urgency: 'normal',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const urgencyLevels =
    styleMode === 'game'
      ? [
          {
            value: 'low',
            label: 'Casual Chat',
            color: 'text-green-400',
            description: 'Non-urgent inquiry',
          },
          {
            value: 'normal',
            label: 'Standard Quest',
            color: 'text-blue-400',
            description: 'Regular business matter',
          },
          {
            value: 'high',
            label: 'Urgent Mission',
            color: 'text-orange-400',
            description: 'Time-sensitive request',
          },
          {
            value: 'critical',
            label: 'Emergency Raid',
            color: 'text-red-400',
            description: 'Immediate attention required',
          },
        ]
      : [
          {
            value: 'low',
            label: 'General Inquiry',
            color: 'text-green-400',
            description: 'Non-urgent question',
          },
          {
            value: 'normal',
            label: 'Business Inquiry',
            color: 'text-blue-400',
            description: 'Standard business matter',
          },
          {
            value: 'high',
            label: 'Urgent Request',
            color: 'text-orange-400',
            description: 'Time-sensitive matter',
          },
          {
            value: 'critical',
            label: 'Critical Issue',
            color: 'text-red-400',
            description: 'Immediate attention needed',
          },
        ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        urgency: 'normal',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-primary">
          {styleMode === 'game' ? 'Message Delivered!' : 'Message Sent!'}
        </h3>
        <p className="text-muted-foreground max-w-md">
          {styleMode === 'game'
            ? 'Your message has been delivered to the guild master. Expect a response within 24 hours!'
            : "Thank you for your message. I'll get back to you as soon as possible!"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        {styleMode === 'game' ? <></> : <Mail className="h-6 w-6 text-primary" />}
        <h2 className="text-2xl font-bold text-primary">
          {styleMode === 'game' ? 'Quest Details' : 'Contact Form'}
        </h2>
        {styleMode === 'game' && <Mail className="h-8 w-8 text-primary animate-pulse" />}
      </div>

      <p className="text-muted-foreground">
        {styleMode === 'game'
          ? 'Need to reach out to the guild master? Send a message and expect a swift response!'
          : "Have a question or want to discuss a project? Send me a message and I'll get back to you soon!"}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-primary">
              {styleMode === 'game' ? 'Adventurer Name' : 'Your Name'}
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-3 py-2 bg-background border border-primary/20 rounded-lg focus:border-primary/40 focus:outline-none transition-colors"
              placeholder={
                styleMode === 'game' ? 'Enter your adventurer name...' : 'Enter your name...'
              }
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-primary">
              {styleMode === 'game' ? 'Contact Crystal' : 'Email Address'}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 bg-background border border-primary/20 rounded-lg focus:border-primary/40 focus:outline-none transition-colors"
              placeholder={
                styleMode === 'game' ? 'your.crystal@realm.com' : 'your.email@example.com'
              }
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-primary">
            {styleMode === 'game' ? 'Quest Priority' : 'Urgency Level'}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {urgencyLevels.map((level) => (
              <button
                key={level.value}
                type="button"
                onClick={() => handleInputChange('urgency', level.value)}
                className={`p-3 rounded-lg border transition-all duration-200 text-left ${
                  formData.urgency === level.value
                    ? 'border-primary bg-primary/10 scale-105'
                    : 'border-primary/20 hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                <div className={`font-medium ${level.color}`}>{level.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{level.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-primary">
            {styleMode === 'game' ? 'Quest Title' : 'Subject'}
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className="w-full px-3 py-2 bg-background border border-primary/20 rounded-lg focus:border-primary/40 focus:outline-none transition-colors"
            placeholder={
              styleMode === 'game' ? "What's this quest about?" : "What's this regarding?"
            }
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-primary">
            {styleMode === 'game' ? 'Quest Details' : 'Message'}
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={6}
            className="w-full px-3 py-2 bg-background border border-primary/20 rounded-lg focus:border-primary/40 focus:outline-none transition-colors resize-none"
            placeholder={
              styleMode === 'game'
                ? 'Describe your quest in detail. What challenges await? What rewards do you seek?'
                : 'Please provide details about your inquiry or project...'
            }
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-105 disabled:scale-100"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              <span>{styleMode === 'game' ? 'Sending Message...' : 'Sending...'}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>{styleMode === 'game' ? 'Send to Guild' : 'Send Message'}</span>
            </div>
          )}
        </Button>
      </form>

      <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <h4 className="font-semibold text-primary mb-2">
          {styleMode === 'game' ? 'Alternative Guild Channels' : 'Other Ways to Reach Me'}
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>developer@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-primary" />
            <span>www.portfolio.dev</span>
          </div>
        </div>
      </div>
    </div>
  );
}
