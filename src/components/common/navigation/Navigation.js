import React from 'react';
import './Navigation.scss';

export default function Navigation() {
  return(
    <section className="navigation">
      <a href="/" className="navigation-item">Home</a>
      {/* <a href="/about-the-company" className="navigation-item">Our Story</a>
      <a href="/news-updates" className="navigation-item">News & Updates</a> */}
      <a href="/contact" className="navigation-item">Contact Us</a>
    </section>
  )
};