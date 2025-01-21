import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tu73i6k', // Your EmailJS service ID
        'template_ksd1abp', // Your EmailJS template ID
        form.current, // The form reference
        'NY4X8jq9Tq-rbNo9L' // Your EmailJS public key
      )
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <br />
      <label>Email</label>
      <input type="email" name="from_email" />
      <br />
      <br />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default ContactUs;
