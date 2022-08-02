import React from "react";
import airbnbLogo from "../images/airbnb-logo.png";

function NavBar() {
  return (
    <nav>
      <img src={airbnbLogo} alt="arbnb-logo" className="nav--logo" />
    </nav>
  );
}

export default NavBar;
