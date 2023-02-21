import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="users">Utilisateurs</Link>
        </li>
        <li>
          <Link to="client">Clients</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
