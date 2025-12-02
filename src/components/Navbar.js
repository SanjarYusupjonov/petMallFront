import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import './Navbar.css';
import PetList from '../pages/PetList';
import PointingCat from './PointingCat';
import ChristmasLights from './ChristmasLights';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const loginBtnRef = useRef(null);
  const signupBtnRef = useRef(null);
  const navRef = useRef(null);
  const loginRef = loginBtnRef;

  React.useEffect(() => {
    const handler = () => setShowSearch(false);
    window.addEventListener('closeSearch', handler);
    return () => window.removeEventListener('closeSearch', handler);
  }, []);

  // shrink navbar slightly when user scrolls down
  React.useEffect(() => {
    const el = navRef.current;
    if (!el) return undefined;
    const onScroll = () => {
      const sc = window.scrollY || window.pageYOffset;
      if (sc > 40) el.classList.add('shrink');
      else el.classList.remove('shrink');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // run once to set initial state
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // When any modal/search is open, pause and hide background videos to prevent overlay issues.
  React.useEffect(() => {
    const modalOpen = showLogin || showSignup || showSearch;
    document.body.classList.toggle('modal-open', modalOpen);

    const vids = Array.from(document.querySelectorAll('video'));
    if (modalOpen) {
      vids.forEach((v) => {
        // remember playing state
        if (!v.paused) {
          v.pause();
          v.setAttribute('data-paused-by-modal', 'true');
        }
        v.style.pointerEvents = 'none';
      });
    } else {
      vids.forEach((v) => {
        if (v.getAttribute('data-paused-by-modal')) {
          v.play().catch(() => {});
          v.removeAttribute('data-paused-by-modal');
        }
        v.style.pointerEvents = '';
      });
    }

    return () => {
      // cleanup: ensure class removed and videos restored
      document.body.classList.remove('modal-open');
      vids.forEach((v) => {
        v.style.pointerEvents = '';
        v.removeAttribute('data-paused-by-modal');
      });
    };
  }, [showLogin, showSignup, showSearch]);

  const openChooser = (filter) => {
    // Open a new dedicated window for sorting/choosing animals
    const url = `/animals.html?filter=${encodeURIComponent(filter || '')}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="navbar" ref={navRef}>
      <ChristmasLights />
      <div className="nav-left">
        <a className="brand" href="/">
          <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="PetMall" className="nav-brand-logo" />
        </a>
      </div>

      <nav className="nav-center">
        <ul className="menu">
          <li className="menu-item dropdown">
            <button className="btn ghost menu-trigger" aria-haspopup="true">Animals ▾</button>
            <ul className="dropdown-list" aria-label="Animal types">
              <li><a href="#dog">Dog</a></li>
              <li><a href="#cat">Cat</a></li>
              <li><a href="#horse">Horse</a></li>
              <li><a href="#lion">Lion</a></li>
              <li><a href="#fish">Fish</a></li>
            </ul>
            <button className="btn ghost choose-nav" onClick={() => openChooser('')}>Choose</button>
          </li>
        </ul>
      </nav>

      <div className="nav-right">
        <button className="btn ghost" title="Search" onClick={() => setShowSearch(true)}>
          🔍
        </button>
        <button ref={loginBtnRef} className="btn ghost" onClick={() => setShowLogin(true)}>
          Login
        </button>
        <button ref={signupBtnRef} className="btn primary" onClick={() => setShowSignup(true)}>
          Sign Up
        </button>
      </div>

      <PointingCat targetLogin={loginBtnRef.current} targetSignup={signupBtnRef.current} />

      {showSearch && typeof document !== 'undefined' && ReactDOM.createPortal(
        <div className="search-window" onClick={() => setShowSearch(false)}>
          <div className="search-window-inner" onClick={(e) => e.stopPropagation()}>
            <button className="search-close" onClick={() => setShowSearch(false)}>✕</button>
            <PetList />
          </div>
        </div>
      , document.body)}

      {showLogin && typeof document !== 'undefined' && ReactDOM.createPortal(
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
      , document.body)}

      {showSignup && typeof document !== 'undefined' && ReactDOM.createPortal(
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
      , document.body)}
    </header>
  );
}
