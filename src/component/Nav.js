import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {

const [show, handleShow] = useState(false);

 const handleScroll = () => {
  if (window.scrollY > 100 ) {
    handleShow(true);
  }else handleShow(false);
 };

 useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);


  return (
    <div className={`nav ${show && 'nav_black'}`}>

      <img className='nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png' alt='Netflix Logo'/>
    <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' alt='Netflix Avatar' />
    
    </div>
  )
}

export default Nav