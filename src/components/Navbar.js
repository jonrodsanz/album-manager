import React from "react";

function Navbar() {
  return (
    <div style={{backgroundColor: "#2d2d2d", opacity: 0.93}}>
      <nav className="navbar navbar-dark container">
        <a className="navbar-brand" href="#">
          <img
            src="http://icons.iconarchive.com/icons/raindropmemory/laboratory/512/Art-icon.png"
            width="30"
            height="30"
            style={{ marginRight: 15 }}
            class="d-inline-block align-top"
            alt="Logo"
          />
          Music Collection
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
