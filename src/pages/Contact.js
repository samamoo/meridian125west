import React from 'react';
import './Contact.scss';

export default function Contact () {


  // OnClick function for form submit
  // if submitted is false 
  // Add error checking


  return(
    <main className="contact">
      <div className="form-container">
        <h1>Contact Us</h1>
        <form className="form">
          <div className="name-email">
            <div className="form-name">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Name"/>
            </div>
            <div className="form-name">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email"/>
            </div>
          </div>
          <label for="subject">Subject</label>
          <input type="text" name="subject" id="subject" placeholder="Subject"/>
          <label for="message">Message</label>
          <textarea type="textarea" rows="8" cols="33" name="message" id="message" placeholder="Type your message here..."/>
          <button type="submit" id="submit-button">Submit</button>
        </form>
      </div>
      {/* Google map of Powell River */}
      {/* Coming Soon */}
      <div class="overlay"></div>
      <div id="coming-soon">
          <h1>COMING SOON!</h1>
      </div>

    </main>
  )
}