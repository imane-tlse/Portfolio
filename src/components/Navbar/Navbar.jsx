import React from 'react';
import './navbar.css';




const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="logo">
            <p>Imane</p>
        </div>
        <div className="elements">
            <ul>
                <li><a href="#test" style={{textDecoration: 'none', color: 'white'}}>Home</a></li>
                <li><a href="#skills" style={{textDecoration: 'none', color: 'white'}}>Skills</a></li>
                <li><a href="#cert" style={{textDecoration: 'none', color: 'white'}}>Certificates</a></li>
                {/* <li><a href="#contact" style={{textDecoration: 'none', color: 'white'}}>Contact</a></li> */}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
