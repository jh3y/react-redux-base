import React from 'react';
import { Link } from 'react-router-dom';

import './header.styl';


/**
  * Header component - a sub component of our main layout component
  *
  * Illustrates how to make use of nav attributes such as onlyActiveOnIndex.
  *
  * Another stateless component so no need for classes
*/
const Header = () => {
  return (
    <header className='header'>
      <h1 className='header-title'>
        <Link to='/' className='header-title__link link'>
          todo-app
        </Link>
      </h1>
      <nav className='header-nav'>
        <Link
          className='header-nav__link link'
          // activeClassName=' header-nav__link--active'
          // onlyActiveOnIndex={ true }
          to='/'>
          Please help me
        </Link>
        <Link
          className='header-nav__link link'
          // activeClassName=' header-nav__link--active'
          to='/create'>
          Create
        </Link>
      </nav>
    </header>
  );
};

export default Header;
