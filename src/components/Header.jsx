// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/profile">User Profile</Link>
          </li>
          <li>
            <Link to="/upload">Upload File</Link>
          </li>
          <li>
            <Link to="/files">View Files</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
