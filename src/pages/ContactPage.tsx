import React from 'react';
import { ContactFormSection } from '../components/ContactFormSection';

interface ContactPageProps {
  initialServiceId?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceId }) => {
  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-16">
      <ContactFormSection initialServiceId={initialServiceId} />
    </div>
  );
};
