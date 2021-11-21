import React, { useState, useRef } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

import './Contact.scss';

export default function Contact () {

  const  initialFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [ contact, setContact ] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [ error, setError ] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [ submitting, setSubmitting ] = useState(false);
  const [ serviceMessage, setServiceMessage ] = useState({
    class: '',
    text: '',
  });
  const [ recaptchaToken, setRecaptchaToken ] = useState('')
  const recaptchaKey = '6LcFyUYdAAAAADOPuFFz_gtHXlfK3ppUy59FZgr7';
  const recaptchaRef = useRef();
  const formId = "FOHu7zSX";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token)
  };

  const postSubmission = async() => {
    const payload = {
      ...contact, "g-recaptcha-response": recaptchaToken
    };
    try {
      const result = await axios.post(formSparkUrl, payload);
      setServiceMessage({class: 'success', text: 'Thank you! Someone will be in touch shortly.'});
      setContact(initialFormState);
      recaptchaRef.current.reset();
      console.log(result)
    } catch (error) {
      setServiceMessage({class: 'fail', text: 'Sorry, there was a problem. Please try again.'})
      console.log(error);
    }
  }

  const errorCheck = () => {
    if (contact.name === '') {
      setError({...error, name: 'Please provide a name.'});
      return false;
    };
    if (contact.email === '') {
      setError({...error, email: 'Please provide an email.'});
      return false;
    };
    if (contact.subject === '') {
      setError({...error, subject: 'Please provide a subject.'});
      return false;
    };
    if (contact.message === '') {
      setError({...error, message: 'Please provide a message for us.'});
      return false;
    };
    setError({...error, name: '', email: '', subject: '', message: ''});
    return true;
  }

  const changeHandler = (e) => {
    setContact({...contact, [e.target.name]: e.target.value })
  }
  const handleSubmit = async(event) => {
    console.log(contact, "contact")
    setSubmitting(true);
    event.preventDefault();
    if (!errorCheck()) {
      return;
    }
    console.log("Posting")
    await postSubmission();
    setSubmitting(false);
    console.log(contact)
  };


  return(
    <main className="contact">
      <div className="contact-banner">
        <div id="banner-text">
          <h1>Have a question? Contact us!</h1>
          <h3>Email us at: <a href="mailto:info@meridian125w.com" id="mailto">info@meridian125w.com</a></h3>
        </div>
      </div>
      <div className="form-container">
        <h1>Contact Us</h1>

        <form className="form">
          <div className="name-email">
            <div className="form-name">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Name" onChange = {changeHandler}/>
              <section className="validation">{error.name}</section>
            </div>
            <div className="form-name">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" onChange = {changeHandler}/>
              <section className="validation">{error.email}</section>
            </div>
          </div>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" placeholder="Subject" onChange = {changeHandler}/>
          <section className="validation">{error.subject}</section>
          <label htmlFor="message">Message</label>
          <textarea type="textarea" rows="8" cols="33" name="message" id="message" placeholder="Type your message here..." onChange = {changeHandler}/>
          <section className="validation">{error.message}</section>
          <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaKey} onChange={updateRecaptchaToken}/>
          <button disabled={submitting} type="submit" id="submit-button" onClick={handleSubmit}> {submitting ? "Submitting..." : "Submit"}</button>
        </form>
        {serviceMessage && <div className={`service-message ${serviceMessage.class}`}>{serviceMessage.text}</div>}
      </div>
      {/* Google map of Powell River */}
    </main>
  )
}