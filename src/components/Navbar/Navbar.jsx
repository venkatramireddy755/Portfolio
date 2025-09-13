
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#" className="logo">MyPortfolio</a>

      {/* Hamburger / Cross */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
      </div>

      {/* Nav Links */}
      <ul className={isOpen ? "nav-links nav-active" : "nav-links"}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

