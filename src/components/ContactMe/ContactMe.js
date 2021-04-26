import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

export default function ContactMe() {
  return (
    <div>
      <h1 className="text-center">Email Me</h1>
      <p className="text-center">
        If you'd like a quote for a drawing leave a brief description of what
        you'd like done and a way to contact you. I will get back to you ASAP!!
      </p>
      <ContactForm />
    </div>
  );
}
