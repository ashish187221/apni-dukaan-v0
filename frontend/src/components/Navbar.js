import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <img src="images/1_Logo.png" className='logo'></img>

      {/* Left side - cart + auth buttons on mobile */}
      <div className="nav-left-mobile">
        <Link to="/cart">
          <img className="addToCart" src="images/AddToCart.jpg" alt="AddToCart" />
        </Link>
        {user ? (
          <button className="logout-btn" onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
          </>
        )}
      </div>

      

      {/* Menu: links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/clothing" onClick={() => setMenuOpen(false)}>Clothes</Link></li>
        <li><Link to="/shoes" onClick={() => setMenuOpen(false)}>Shoes</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      {/* Desktop right side - normal view */}
      <div className="nav-right-desktop">
        <Link to="/cart">
          <img className="addToCart" src="images/AddToCart.jpg" alt="AddToCart" />
        </Link>
        {user ? (
          <div className="auth-buttons">
            <span>Hi, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
