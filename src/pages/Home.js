import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import { fadeIn } from '../animations/gsap';
import './Home.scss';

export default function Home () {
  let sectionRef = useRef(null);

  const intersection = useIntersection( sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  if (intersection && intersection.intersectionRatio > 0.5) {
    fadeIn(".home-two__text");
  } ;

  return(
    <main className="home">
      <section className="home-one">
        <div className="home-one__hero">
          <img src="/images/IMG_B6D2BD79C9CF-1.jpeg" alt="logo"/>
        </div>
        <div className="home-one__soon">
          <h1>Meridian 125W Cultivation Ltd.</h1>
          <h6>Coming Soon!</h6>
        </div>
      </section>
      <section className="home-two">
        <section className="home-two__text" ref={sectionRef}>
          <h1>A Little About Us</h1>
          <div className="home-two__p">
            <p>Located on the traditional and unceded territory of the Tla’amin First Nations in the community of Powell River, Meridian 125W is a small group of hard working people with great experience in Canadian cannabis who are building something new.</p><p> We take our inspiration from nearby Mitlenatch Island, a small nature provincial park directly on the 125th Meridian West, whose name means “calm waters all around” in the Coast Salish language.</p>
          </div>
        </section>
        <section className="home-two__image">
          <img src="images/meridian125building.jpg" alt="facility"/>
        </section>
      </section>
      <section className="home-three">
        <div className="home-three__contactme">
          <div className="home-three__form-container">
            <h1>Contact Us</h1>
            <h5>info@meridian125w.com</h5>
          </div>
          <div className="home-three__image">
            <img src="images/gulf-islands-bc.jpeg" alt="bc gulf islands"/>
          </div>
        </div>

      </section>
      
    </main>
  )
}