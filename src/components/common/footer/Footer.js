import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'; 
import './Footer.scss';

export default function Footer () {
  return(
    <section className="footer">
      <section>
        {/* <FontAwesomeIcon className="social-icon" size="2x" icon={faFacebookF} /> */}
        <a href="https://twitter.com/meridian125w" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="social-icon" size="2x" icon={faTwitter} />
        </a>
        {/* <FontAwesomeIcon className="social-icon" size="2x" icon={faInstagram} /> */}
        <a href="https://www.linkedin.com/company/meridian-125w-cultivation-ltd" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="social-icon" size="2x" icon={faLink} />
        </a>
      </section>
      <section>
        Copyright 2021 © Meridian 125W Cultivation Ltd.
      </section>
    </section>
  )
}