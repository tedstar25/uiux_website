import React from 'react';

import './Footer.css';
import {FooterOverlay,Newsletter} from '../../components';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
