import { useState } from "react";

function Navbar({ onLogin, onSignUp }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">ReactProject</div>

      <ul className={`navbar-links ${open ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="navbar-actions">
        <button className="btn login-btn" onClick={onLogin}>Login</button>
        <button className="btn signup-btn" onClick={onSignUp}>Sign Up</button>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
