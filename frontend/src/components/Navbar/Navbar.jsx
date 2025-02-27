"use client"

import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='contact'>
					<p>C0NTACT</p>
					<p>+34 654 263 452</p>
					<p>contact@entroprypro.nyc</p>
        </div>
        <div className='logo'>
            <span>Entropy (add logo)</span>
        </div>
        <div className='social'>
					<p>1NSTAGRAM</p>
					<p>@entropy.ai</p>
        </div>
    </div>
  )
}

export default Navbar