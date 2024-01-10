import React from "react";
import { Link } from "react-router-dom";

//Nav bar will go in the header

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a className="nav-link" href="#">
              <Link to="/">HOME</Link>
            </a>
          </li>
          <li class="nav-item">
            <a className="nav-link" href="#">
              <Link to="/red">RED</Link>
            </a>
          </li>
          <li class="nav-item">
            <a className="nav-link" href="#">
              <Link to="/blue">BLUE</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
