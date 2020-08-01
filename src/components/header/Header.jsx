import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Header.style.scss";

function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">Periodic Table</Link>
      </div>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </header>
  );
}

export default Header;
