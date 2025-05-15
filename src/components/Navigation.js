import React, { useState } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { MdOutlineClose } from 'react-icons/md';
import Menu from './shared/Menu';
import logo from '../assets/logo.png';
import DesktopMenu from './shared/DesktopMenu';
import SearchBar from './shared/SearchBar';
import '../styles/navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      toggleMenu();
    }
  };

  return (
    <section>
      <div className="nav-container">
        <button
          className="menu"
          type="button"
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          tabIndex="0"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <MdOutlineClose size={40} /> : <TfiMenu size={40} />}
        </button>
        <div className="sub-nav">
          <img src={logo} alt="logo" className="logo" />
          <p className="logo-p">
            The word of Reconciliation Mission
            <br />
            A.k.a Saints Equippers Ministries
          </p>
        </div>
        <div className="desktop-menu">
          <DesktopMenu />
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
      <div className={`drop-down ${menuOpen ? 'open' : ''}`}>
        <Menu closeMenu={() => setMenuOpen(false)} />
      </div>
      <div className="nav-links" />
    </section>
  );
};

export default Navigation;
