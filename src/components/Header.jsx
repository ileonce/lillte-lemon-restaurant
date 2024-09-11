import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={Logo} alt="Logo" width={200}  height={40}/>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
