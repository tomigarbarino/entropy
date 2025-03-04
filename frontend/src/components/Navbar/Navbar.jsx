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
          <DynamicText text="CONTACT" />
          <DynamicText text="+54 9 2234 540881" />
          <DynamicText text="+52 55484 47485" />
          <DynamicText text="contact@entropypro.nyc" />
        </div>
        <div className="social">
        <p>1NSTAGRAM</p>
        <p>@entropy.ai</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
