import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send('service_r1jpyff', 'template_i7dp36q', templateParams, 'Nzwz_PRyVrr5NrlR1')
      .then(
        (response) => {
          console.log('Email sent successfully');
          setSuccessMessage('Email sent successfully');
          setErrorMessage('');
        },
        (error) => {
          console.error('Failed to send email:', error);
          setSuccessMessage('');
          setErrorMessage('Failed to send email');
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className='bodyheaders' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Contact Us</h1>

      <div className="form-and-map-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ fontSize: '1.2rem', padding: '0.5rem', width: '100%', minHeight: '50px' }}
            />
          </div>

          <div className="input-group">
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ fontSize: '1.2rem', padding: '0.5rem', width: '100%', minHeight: '50px' }}
            />
          </div>

          <div className="input-group">
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ fontSize: '1.5rem', padding: '0.5rem', width: '100%', minHeight: '200px' }}
            ></textarea>
          </div>

          <button type='submit'>Send</button>
          <button type='submit'>Send</button>
          </form>
          {successMessage && <p style={{ color: 'black', fontSize: '2rem' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>

        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.198287336078!2d-83.21774582371205!3d35.37553774670528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88596ad32d617159%3A0xb4282d59b57f14ae!2s29%20Bridge%20St%2C%20Sylva%2C%20NC%2028779!5e0!3m2!1sen!2sus!4v1696987295989!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;