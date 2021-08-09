import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'; 
import './Footer.scss';

export default function Footer () {
  return(
    <section className="footer">
      <section>
        <FontAwesomeIcon className="social-icon" size="2x" icon={faFacebookF} />
        <FontAwesomeIcon className="social-icon" size="2x" icon={faTwitter} />
        <FontAwesomeIcon className="social-icon" size="2x" icon={faInstagram} />
        <FontAwesomeIcon className="social-icon" size="2x" icon={faLink} />
      </section>
      <section>
        Copyright 2021 © Meridian 125 West Cultivation Ltd.
      </section>
    </section>
  )
}