import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('meqvoyrk');
  if (state.succeeded) {
    return <p>Thanks for the message! I'll get back to you ASAP!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="email">Your Email Address</label>
      <input id="email" type="email" name="email" className="mb-1" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Your Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className="text-center w-100 my-1 align-self-center bg-secondary bg-gradient text-white"
        disabled={state.submitting}
      >
        Get A Quote!
      </button>
    </form>
  );
}
