import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p className="text-white">Connect with me on social media!</p>
      <SocialIcon
        url="https://www.facebook.com/mwalldrawings"
        target="_blank"
        className="ml-2"
        style={{ height: 50, width: 50 }}
      />
      <SocialIcon
        url="https://www.instagram.com/mwalldrawings"
        target="_blank"
        className="ml-2"
        style={{ height: 50, width: 50 }}
      />
    </footer>
  );
}
