/**
  * If the footer is just a static block of content, there is no reason this
  * has to be in the app and can be actually outside of the app but inside
  * your base markup
*/

import React from 'react';

import './footer.styl';


/**
  * A simple footer component.
  *
  * Yep, that's right! This is actually unnecessary, we could actually just
  * include this in our markup template used by the HTML plugin via Webpack.
  *
  * It does nothing and appears on every page so doesn't need to be a component.
  *
  * But for the sake of it we create a stateless component by just creating a
  * function.
*/
const Footer = function () {
  return (
    <footer className='footer'>
      &lt; Made real by <a target="_blank" href='https://github.com/jh3y' className='footer__link'>jh3y</a> | &copy; 2017 /&gt;
    </footer>
  );
};


export default Footer;
