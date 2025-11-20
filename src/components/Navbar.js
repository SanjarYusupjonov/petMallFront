import React, { useState } from 'react';
import '../App.css';
import './Navbar.css';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="brand">PetMall</div>
      </div>

      <div className="nav-right">
        <button className="btn ghost" onClick={() => setShowLogin(true)}>
          Login
        </button>
        <button className="btn primary" onClick={() => setShowSignup(true)}>
          Sign Up
        </button>
      </div>

      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Login</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                Email
                <input type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Password
                <input type="password" placeholder="password" required />
              </label>
              <div className="modal-actions">
                <button className="btn ghost" onClick={() => setShowLogin(false)}>
                  Cancel
                </button>
                <button className="btn primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSignup && (
        <div className="modal-overlay" onClick={() => setShowSignup(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Sign Up</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                Name
                <input type="text" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Password
                <input type="password" placeholder="password" required />
              </label>
              <div className="modal-actions">
                <button className="btn ghost" onClick={() => setShowSignup(false)}>
                  Cancel
                </button>
                <button className="btn primary">Create account</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
