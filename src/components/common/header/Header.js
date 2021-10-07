import React from 'react';
import { Navigation } from '../../common';
import './Header.scss';

export default function Header() {
  return(
    <div class="header-position">
      <section className="header">
        <section className="header-top">
          <section className="header-top__logo">
            <a href="/" className="header-logo">
              <img src="/images/img_placeholder.png" alt="logo"/>
            </a>
          </section>
          <section className="header-top__navbar">
            <section className="header-top__navigation">
              <Navigation />
            </section>
            <hr className="header-top__seperator" />
          </section>
        </section>
        {/* <section className="header-bottom">
          <section className="header-bottom__phone">
            99999999999
          </section>
          <section className="header-bottom__email">
            shop.info@gmail.com
          </section>
        </section> */}
      </section>

    </div>
  )
}