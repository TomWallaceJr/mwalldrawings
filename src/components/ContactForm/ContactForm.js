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
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Your Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
