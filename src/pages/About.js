import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { fadeIn, fadeOut } from '../animations/gsap';
import './About.scss';

export default function About () {
  let sectionRef = useRef(null);

  const intersection = useIntersection( sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  // intersection && intersection.intersectionRatio < 0.5
  // ? fadeOut(".about_text")
  // : fadeIn(".about_text");

  if (intersection && intersection.intersectionRatio > 0.5) {
    fadeIn(".about_text");
  } 

  return(
    <main className="about">
      <div className="about_banner">
        <img src="/images/cannabis_flower.jpeg" alt="closeup of cannabis flower"/>
      </div>
      <div className="about_text" ref={sectionRef}>
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