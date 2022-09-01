import React from "react";
import { NavLink } from "react-router-dom";
import Togglebk from "../toggletheme";

function Navbar(props) {
  return (
    <nav className="home_bar">
      <ul className="menu">
        <li className="menu_list">
          <NavLink to="/georgeeliotscholar" onClick={props.clicked}>
            Home
          </NavLink>{" "}
        </li>
        <li className="menu_list">
          {" "}
          <NavLink to="georgeeliotscholar/knowledge" onClick={props.clicked}>
            Knowledge
          </NavLink>
        </li>
        <li className="menu_list">
          {" "}
          <NavLink to="georgeeliotscholar/collectionlist" onClick={props.clicked}>
            Collections
          </NavLink>
        </li>
        <li className="menu_list">
          {" "}
          <NavLink to="georgeeliotscholar/omeka" onClick={props.clicked}>
            Omeka Tools
          </NavLink>
        </li>

        {/* <li className="menu_list">
          {" "}
          <NavLink to="/setup" onClick={props.clicked}>
            Setup
          </NavLink>
        </li> */}
        {/* <li className="menu_list">
          {" "}
          <NavLink to="/blog" onClick={props.clicked}>
            Blog
          </NavLink>
        </li> */}
        <li className="menu_list">
          {" "}
          <Togglebk />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

