import React from 'react';
import { Link } from 'react-router-dom';
import "./router.css";

export default function Header() {
  return (
    
<nav class="navbar navbar-expand-sm justify-content-between">
    <div className='d-flex align-items-center justify-content-center'>
        <img className='w-25 mr-4' src='https://assets.ccbp.in/frontend/react-js/wave-logo-img.png' alt='wave'></img>
        <p className='p1'>Wave</p>
    </div>
  <ul class="navbar-nav">
    <li class="nav-item active">
      <Link class="nav-link" to="/">Home</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/about">About</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/contact">Contact</Link>
    </li>
    
  </ul>
</nav>
  )
}