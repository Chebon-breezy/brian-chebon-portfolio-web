import React, { useState, useRef, useEffect } from 'react';
import '../styles/Mail.css';

import emailjs from 'emailjs-com';

const Mail = () => {
  const radio = useRef();
  const [toSend, setToSend] = useState({
    subject: '',
    name: '',
    email: '',
    message: ''
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const valid = {
    email: false,
    rest: false
  }
  const error = useRef();
  const formResMsg = useRef();

  const validation = (email, name, message, subject) => {
    const acceptedEmail = ['gmail.com', 'yahoo.com', 'yahoo.co.in', 'outlook.com', 'protonmail.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com', 'gmx.com', 'hey.com'];
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      acceptedEmail.includes(email.split('@')[1]) ?
        valid.email = true : valid.email = false;
    } else {
      valid.email = false;
    }

    if (name !== '' && subject !== '' && message.length > 100) {
      valid.rest = true;
    } else {
      valid.rest = false;
    }
  }

  const reset = () => {
    setToSend({
      subject: '',
      name: '',
      email: '',
      message: ''
    });
  }

  const handleClick = () => {
    validation(toSend.email, toSend.name, toSend.message, toSend.subject);
    const condition = Object.values(valid).every((value) => value === true);
    if (!condition) {
      error.current.style.display = 'block';
    } else {
      // Using email.js to send emails
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      emailjs.send(serviceID, templateID, toSend, publicKEY)
        .then((response) => {
          formResMsg.current.innerText = "Message sent...";
          reset();
        })
        .catch((err) => {
          formResMsg.current.innerText = "Failed... " + err.text;
        });
      error.current.style.display = 'none';
    }
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const arrayOfSub = ['work', 'chat', 'collaboration'];
    if (toSend.subject === '') {
      setIsDisabled(false);
    } else {
      if (!(arrayOfSub.includes(toSend.subject))) {
        radio.current.checked = false;
        setIsDisabled(true);
      }
    }
  }, [toSend.subject]);

  return (
    <div className='mail' id='mail'>
      <h2>Get In Touch</h2>
      <div>
        <div className='entry'>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" autoComplete='off' value={toSend.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" autoComplete='off' value={toSend.email} onChange={handleChange} />
          </div>
          <div className='options'>
            <div>
              <input
                type="radio"
                name="subject"
                value='work'
                id="work"
                checked={toSend.subject === 'work'}
                onChange={handleChange}
                ref={radio}
                disabled={isDisabled}
              />
              <label htmlFor="work">Work</label>
            </div>
            <div>
              <input
                type="radio"
                name="subject"
                value="collaboration"
                id="collaboration"
                checked={toSend.subject === 'collaboration'}
                onChange={handleChange}
                ref={radio}
                disabled={isDisabled}
              />
              <label htmlFor="collaboration">Collaboration</label>
            </div>
            <div>
              <input
                type="radio"
                name="subject"
                value="chat"
                id='chat'
                checked={toSend.subject === 'chat'}
                onChange={handleChange}
                ref={radio}
                disabled={isDisabled}
              />
              <label htmlFor="chat">Coffee Chat</label>
            </div>
            <div>
              <input type="text" name="subject" id='other' placeholder='Other' autoComplete='off' onChange={handleChange} />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="10" value={toSend.message} onChange={handleChange}></textarea>
          </div>
          <p style={{ color: 'red' }} ref={error}>Something is missing</p>
          <p style={{ color: 'red' }} ref={formResMsg}></p>
          <div className='btn' onClick={handleClick}>Send Message</div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
