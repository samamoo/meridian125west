import React from 'react';
import './Home.scss';

export default function Home () {
  return(
    <main className="home">
      <section className="home-one">
        <h1>MERIDIAN 125 WEST CULTIVATION</h1>
      </section>
      <section className="home-two">
        <section className="home-two__text">
          <h1>WHO WE ARE</h1>
          <div className="home-two__p">
            <p>Our story is borne on the Pacific West Coast. Our cultivation location uniquely takes fresh clean protected waters from Lake Powell in the niche corridor that connects and flows into the Salish Sea in between 125W and 124W.</p><p> Take a short boat ride from our operations into the middle of the Salish Sea and you will find one of the smallest parks which is highly abundant with life above and below the ocean waves. It is called Mitlenatch Island which means "calm waters all around" and it is exactly at 125W. It is the centre of our inspiration for our coastal cultivation and harvesting: Abundant, deep, rich and full of life with calm and peace all around.</p>
          </div>
        </section>
        <section className="home-two__image">
          <img src="images/meridian125building.jpg" alt="facility image"/>
        </section>
      </section>
      <section className="home-three">
        <div className="home-three__contactme">
          <h1>CONTACT US</h1>
        </div>

      </section>
      
    </main>
  )
}