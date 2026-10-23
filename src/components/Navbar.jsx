
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import ocasLogo from "../assets/logo-full.png";

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Process", path: "/process" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="ocas-navbar">
      <div className="ocas-navbar-container">
        {/* Logo */}
        <Link
          to="/"
          className="ocas-navbar-logo"
          aria-label="OCAS home"
          onClick={closeMenu}
        >
          <img src={ocasLogo} alt="OCAS Software" />
        </Link>

        {/* Navigation */}
        <nav
          id="ocas-navigation"
          className={`ocas-navbar-menu ${
            menuOpen ? "ocas-menu-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `ocas-navbar-link ${
                  isActive ? "ocas-link-active" : ""
                }`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <Link
            to="/contact"
            className="ocas-navbar-cta ocas-mobile-cta"
            onClick={closeMenu}
          >
            <span>Start a Project</span>
            <span className="ocas-cta-arrow">↗</span>
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="ocas-navbar-cta ocas-desktop-cta"
        >
          <span>Start a Project</span>
          <span className="ocas-cta-arrow">↗</span>
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`ocas-navbar-toggle ${
            menuOpen ? "ocas-toggle-open" : ""
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="ocas-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
