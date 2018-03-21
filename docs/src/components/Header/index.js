import React from 'react'
import Link from 'gatsby-link'
import './style.css';

const Header = () => (
  <div className='header'>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 className='logo-wrapper'>
        <Link className='logo' to="/">Sut.JS</Link>
      </h1>
      
    </div>
  </div>
)

export default Header
