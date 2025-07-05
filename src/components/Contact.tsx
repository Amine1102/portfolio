import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useLanguage } from '../contexts/LanguageContext';

function Contact() {
  const { t } = useLanguage();
  
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* emailJS */

    if (name !== '' && email !== '' && message !== '') {
     var templateParams = {
     name: name,
     email: email,
     message: message
   };

   console.log(templateParams);
   emailjs.send('service_l6j5xvt', 'template_9ukxn9s', templateParams, '9nJrezdvofbcxpfxL').then(
     (response) => {
       console.log('SUCCESS!', response.status, response.text);
     },
     (error) => {
       console.log('FAILED...', error);
     },
   );
   setName('');
   setEmail('');
   setMessage('');
 }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.description')}</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <div>
                <label>Your Name</label>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => {
                    console.log('Name changing to:', e.target.value);
                    setName(e.target.value);
                  }}
                  placeholder="What's your name?"
                  style={{width: '100%', padding: '10px', margin: '5px 0'}}
                />
              </div>
              <div>
                <label>Email / Phone</label>
                <input 
                  type="text"
                  value={email}
                  onChange={(e) => {
                    console.log('Email changing to:', e.target.value);
                    setEmail(e.target.value);
                  }}
                  placeholder="How can I reach you?"
                  style={{width: '100%', padding: '10px', margin: '5px 0'}}
                />
              </div>
            </div>
            <div>
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => {
                  console.log('Message changing to:', e.target.value);
                  setMessage(e.target.value);
                }}
                placeholder="Send me any inquiries or questions"
                rows={10}
                style={{width: '100%', padding: '10px', margin: '5px 0'}}
              />
            </div>
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;