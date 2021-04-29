import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './ContactMe.css';

export default function ContactMe() {
  return (
    <div className="contact-page-container">
      <h1 className="text-center cursive-font">Email Me</h1>
      <p className="text-center">
        If you would like a quote for a drawing, leave a brief description of
        what you would like me to do and a way to contact you. I will respond to
        you ASAP and set up a consultation!!
      </p>
      <ContactForm />
    </div>
  );
}
