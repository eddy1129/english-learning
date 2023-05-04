import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {

  return (
    <div className={classes.navbar}>
      <Link to="/" className={classes.brand}>
        {props.home}
      </Link>
      <div className={classes.navLinks}>
        <Link to="/table">Vocab Table</Link>
      </div>
      <div className={classes.navLinks}>
        <Link to="/reask">Reask Record</Link>
      </div>
    </div>
  );
}

export default Navbar;