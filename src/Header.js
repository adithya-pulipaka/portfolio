import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__title">
          <img
            src="images/profile.JPG"
            alt="Logo"
            className="header__title--logo"
          />
          <h1>
            <a href="/" className="header__title--link">
              {" "}
              Adithya Kashyap
            </a>
          </h1>
        </div>

        <nav className="header__nav"></nav>
      </header>
    </>
  );
};

export default Header;
