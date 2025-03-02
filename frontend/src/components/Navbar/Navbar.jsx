"use client"

import React from 'react'
import "./navbar.scss"

const Navbar = ({showNav}) => {
  return (
    <nav className={`navbar ${showNav ? 'navbar--show' : 'navbar--hide'}`}>
        <div className="contact--desktop">
            <p>CONTACT</p>
            <p>+34 654 263 452</p>
            <p>contact@entropypro.nyc</p>
        </div>
        <div className="logo">
          <img src="/images/ENTROPY_LOGO-12.png" alt="Entropy Logo" />
        </div>
        <div className="social--desktop">
            <p>1NSTAGRAM</p>
            <p>@entropy.ai</p>
        </div>

        <div className="navbar__bottom">
          <div className="contact">
              <p>CONTACT</p>
              <p>+34 654 263 452</p>
              <p>contact@entropypro.nyc</p>
          </div>
          <div className="social">
              <p>INSTAGRAM</p>
              <p>@entropy.ai</p>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
