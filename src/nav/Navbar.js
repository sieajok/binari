import './Navbar.css';
import logo from './../img/logo.png';
import React, { useState, useEffect } from 'react';




  
  
  function Navbar() {
    const [navbarClass, setNavbarClass] = useState('');
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setNavbarClass('sticky');
      } else {
        setNavbarClass('');
      }
    };
  
    return (
      <nav className={navbarClass}>
        <ul>
          <img src={logo} alt="" id='jiko' />
        </ul>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/tentang">Tentang</a></li>
          <li><a href="/layanan">Layanan</a></li>
          <li><a href="/stratup">Startup</a></li>
          <li><a href="/acara">Acara</a></li>
          <li><a href="/contac">Kontak</a></li>
      </ul>
    </nav>
  );
}
  
  export default Navbar;



  
  