import React from 'react';
import "./Header.css"
import './font.css';

function Header() {
  const handleClick = () => {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
  }

  return (
    <header>
      <div className="logo" style={{ fontFamily: 'Axiforma' }}>Asset warranty</div>
      <div className="profile" onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="nav-bar" >
        <ul>
          <li>
            <a href="#" style={{ fontFamily: 'Axiforma' }} className="active">Product</a>
          </li>
          <li>
            <a href="#" style={{ fontFamily: 'Axiforma' }} className="active">Dealer</a>
          </li>
          <li>
            <a href="#" style={{ fontFamily: 'Axiforma' }} className="active">Enroll</a>
          </li>
          <li>
            <a href="#"  style={{ fontFamily: 'Axiforma' }}className="active">Stock</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
