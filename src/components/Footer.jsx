import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import ocasLogo from "../assets/logo-full.png";

const Footer = () => {
  const services = [
    { name: "Custom Software", href:"/services" },
    { name: "Cloud & DevOps", href: "/services" },
    { name: "AI & Data Engineering", href: "/services" },
    { name: "Mobile Development", href: "/services" },
  ];

  const company = [
    { name: "Industries", href: "/industries" },
    { name: "Our Process", href: "/process" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const address =
    "3rd Floor, 302, Road No. 57, SBH Officers Colony, Mega Hills, Madhapur, Hyderabad, Telangana 500081";

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="ocas-footer" id="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={ocasLogo} alt="OCAS Software" />
          </Link>

          <p className="footer-description">
            A software development partner for teams that
            need custom applications, cloud infrastructure,
            and modern engineering done right.
          </p>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3 className="footer-heading">Services</h3>

          <ul className="footer-links">
            {services.map((service) => (
              <li key={service.name}>
                <Link to={service.href}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>

          <ul className="footer-links">
            {company.map((item) => (
              <li key={item.name}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3 className="footer-heading">Contact</h3>

          <a
            className="footer-contact-item"
            href="mailto:hello@ocassoftware.com"
          >
            <svg
              className="footer-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m4 7 8 6 8-6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>hello@ocassoftware.com</span>
          </a>

          <a
            className="footer-contact-item footer-address"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="footer-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="10"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>
            <span>{address}</span>
          </a>

          {/* Google Maps Preview */}
          <a
            className="footer-map"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open OCAS office location in Google Maps"
            title="Open location in Google Maps"
          >
            <iframe
              title="OCAS office location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                address
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              tabIndex="-1"
              aria-hidden="true"
            />

            <span className="footer-map-overlay">
              <span className="footer-map-label">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                View on Google Maps
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} OCAS. All rights reserved.</p>
      </div>

      {/* Back to Top */}
      <button
        type="button"
        className="footer-back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;