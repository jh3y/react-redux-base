import React, { PropTypes } from 'react';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

/**
  * Main layout component for app
  *
  * Used as the root component and always consists of header and footer along
  * with related page content
*/
const Layout = (props) => {
  return (
    <div className='container'>
      <Header/>
      <div className='container'>
        { props.children }
      </div>
      <Footer/>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
