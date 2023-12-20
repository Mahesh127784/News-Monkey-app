import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("general");

  const handleLinkClick = (category) => {
    setActiveLink(category);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/general">
            <strong> NewsMonkey</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav" // Corrected ID
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "general" ? "active" : ""
                  }`}
                  to="/general"
                  onClick={() => handleLinkClick("general")}
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "business" ? "active" : ""
                  }`}
                  to="/business"
                  onClick={() => handleLinkClick("business")}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "entertainment" ? "active" : ""
                  }`}
                  to="/entertainment"
                  onClick={() => handleLinkClick("entertainment")}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "health" ? "active" : ""
                  }`}
                  to="/health"
                  onClick={() => handleLinkClick("health")}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "science" ? "active" : ""
                  }`}
                  to="/science"
                  onClick={() => handleLinkClick("science")}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "sports" ? "active" : ""
                  }`}
                  to="/sports"
                  onClick={() => handleLinkClick("sports")}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "technology" ? "active" : ""
                  }`}
                  to="/technology"
                  onClick={() => handleLinkClick("technology")}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
