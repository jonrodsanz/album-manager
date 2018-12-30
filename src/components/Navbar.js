import React from "react";

//http://icons.iconarchive.com/icons/raindropmemory/laboratory/512/Art-icon.png

function Navbar() {
  return (
    <div style={{backgroundColor: "#2d2d2d", opacity: 0.93}}>
      <nav className="navbar navbar-dark container">
        <div className="navbar-brand">
          <img
            src="../assets/Musiger.png"
            width="100"
            height="35"
            style={{ marginRight: 15 }}
            className="d-inline-block align-top my-0"
            alt="Logo"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
