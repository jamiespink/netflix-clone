import React from "react";
import "./Nav.css";
import logo from "./assets/netflix-logo.png";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__contents">
        <img className="nav__logo" src={logo} alt="" />
        <img
          className="nav__avatar"
          src="https://occ-0-1464-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
          alt=""
        />
      </div>
      <h1>This is the nav</h1>
    </div>
  );
}

export default Nav;
