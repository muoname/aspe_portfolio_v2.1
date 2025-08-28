'use client';

import { Mail, MapPin, Phone, Globe } from 'lucide-react';

type StyleMode = 'normal' | 'game';

interface ContactInfoProps {
  styleMode: StyleMode;
}

export function ContactInfo({ styleMode }: ContactInfoProps) {
  const contactInfo = [
    { label: 'Location', value: 'Las Pinas, Manila', icon: MapPin },
    { label: 'Email', value: 'eugenelancea@gmail.com', icon: Mail },
    { label: 'Phone', value: '+63 96626 74610', icon: Phone },
    { label: 'Website', value: 'easpe.vercel.app', icon: Globe },
  ];

  return (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-primary flex items-center space-x-2">
        <Mail className="h-5 w-5" />
        <span>{styleMode === 'game' ? 'Guild Contact' : 'Contact Information'}</span>
      </h4>

      <div className="space-y-3">
        {contactInfo.map((contact, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
          >
            <contact.icon className="h-4 w-4 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">{contact.label}</div>
              <div className="font-medium">{contact.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
