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
    <div>
      <h1 className='bodyheaders' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Contact Me</h1>

    <div className="form-container">
        

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
        </form>
        {successMessage && <p style={{ color: 'black', fontSize: '2rem' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>



  );
}

export default Contact;