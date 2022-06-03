//links com react-router para definicao de rotas dinamicas pelo app

import React from "react";
import "./Navbar.css";

/* uso de rotas por meio de links dinâmicos sendo carregados a partir da base de dados */
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-a">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/info">Info</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
