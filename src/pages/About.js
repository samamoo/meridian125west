import React from 'react';
import './About.scss';

export default function About () {
  return(
    <main className="about">
      <div className="about_banner">
        <img src="/images/cannabis_flower.jpeg" alt="closeup of cannabis flower"/>
      </div>
      <div className="about_text">
        <h1>Our Story</h1>
        <p>Nestled along the Pacific Northwest Coast you will find our cultivation facility located within Powell River. 
        <br/>
        A short boat ride from the scenic shoreline of our Powell River operations into the middle of the Salish Sea, is where you will discover Mitlenatch Island at Meridian 25W. 
        <br/>
        Mitlenatch Island which translates to “calm waters all around” in the Coast Salish language is a designated provincial park overflowing with marine life, mammals and nesting birds.
        <br/>
        This sublime refuge is the core inspiration for our coastal cultivation and harvesting: Abundant,  rich and full of life, surrounded by calm.</p>
        <button id="about_contact">
          <a href="/contact">Contact Us</a>
        </button>
      </div>
    </main>
  )
}