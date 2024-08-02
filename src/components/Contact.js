// This is the Contact page using the Tally.so widget

import React, { useEffect } from 'react';
import '../styles/Contact.css';

function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <iframe
        data-tally-src="https://tally.so/embed/mDejJZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        height="563"
        title="Contact Us (StudentDB)"
        className="tally-form"
      ></iframe>
    </div>
  );
}

export default Contact;
