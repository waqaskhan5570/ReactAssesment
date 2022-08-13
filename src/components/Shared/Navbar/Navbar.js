import React from "react";
import "./Navbar.css";
import avatarPlaceHolder from "../../../assets/images/avatar.png";

function Navbar() {
  return (
    <>
      <nav className="navigationWrapper">
        <main>
          <p className="nav_title">AAA</p>
          <ul>
            <li>
              <a href="/feedback">Feedback</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <img className="avatar" src={avatarPlaceHolder} alt="avatar" />
            </li>
          </ul>
        </main>
      </nav>
    </>
  );
}

export default Navbar;
