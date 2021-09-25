import React from 'react';
import './News.scss';

export default function News () {
  return(
    <main className="news">
      <header>
        <h1>News & Updates</h1>
        <h3> Our Progress</h3>
        <button type="button" id="btn_read">
          <a href='https://www.prpeak.com/local-news/city-of-powell-river-plans-to-sell-property-currently-leased-to-sante-veritas-therapeutics-3887918' target='_blank' rel="noreferrer">Read More
          </a>
        </button>
      </header>
      <section className="updates">
        <article>
          <div className="updates_img"></div>
          {/* image */}
          <h1>Powel River PEAK</h1>
          <p>City of Powell River plans to sell property currently leased to Santé Veritas Therapeutics.</p>
        </article>
        <article>
        <div className="updates_img"></div>
          {/* logo */}
          <h1>Our Team</h1>
          <p>We are growing from a small group of key employees and contractors to 60+ employee strong facility with over 50K sq ft of indoor space.</p>
        </article>
        <article>
          <div className="updates_img">
            <img src="images/meridian125building.jpg" alt="facility"/>
          </div>
          <h1>Our Facility</h1>
          <p>Meridian has spent over $50M to realize this world class facility. We will be using a high tech approach for the highest quality results using Hydroponics and AI.</p>
        </article>
      </section>
    </main>
  )
}