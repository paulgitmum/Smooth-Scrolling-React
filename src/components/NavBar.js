import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">Smooth Scroll</div>

      <Link
        to="home"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        className="list"
      >
        Home
      </Link>
      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        className="list"
      >
        About Us
      </Link>
      <Link
        to="contacts"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        className="list"
      >
        Contacts
      </Link>
    </div>
  );
}

export default NavBar;
