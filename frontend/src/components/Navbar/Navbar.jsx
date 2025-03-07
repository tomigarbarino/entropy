"use client"

import React from 'react'
import "./navbar.scss"
import DynamicText from "../../hooks/DynamicTextNav"

const Navbar = ({showNav}) => {
  return (
    <nav className={`navbar ${showNav ? 'navbar--show' : 'navbar--hide'}`}>
        <div className="contact--desktop">
            <p>CONTACT</p>
            <p>+54 9 2234 540881</p>
            <p>+52 55484 47485 </p>
            <a href="mailto:contact@entropypro.nyc">
            <p>contact@entropypro.nyc</p>
            </a>
        </div>
        <div className="logo">
          <img src="/images/ENTROPY_LOGO-12.png" alt="Entropy Logo" />
        </div>
        <div className="social--desktop">
            <p>1NSTAGRAM</p>
            <a href="https://www.instagram.com/_entropy.ai/" target="_blank" rel="noopener noreferrer">
              <p>@_entropy.ai</p>
            </a>
        </div>

        <div className="navbar__bottom">
        <div className="contact">
          <DynamicText text="CONTACT" />
          <DynamicText text="+54 9 2234 540881" />
          <DynamicText text="+52 55484 47485" />
          <a href="mailto:contact@entropypro.nyc">
          <DynamicText text="contact@entropypro.nyc" />
          </a>
        </div>
        <div className="social">
        <DynamicText text="1NSTAGRAM" />
        <a href="https://www.instagram.com/_entropy.ai/" target="_blank" rel="noopener noreferrer">
              <DynamicText text="@_entropy.ai" />
            </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
