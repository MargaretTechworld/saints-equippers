import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/desktopmenu.css';

const DesktopMenu = () => {
  const location = useLocation();

  return (
    <div>
      <ul className="dmenu-nav">
        <li>
          <Link to="/" className={`dnav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={`dnav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/sermon" className={`dnav-link ${location.pathname === '/sermon' ? 'active' : ''}`}>
            Sermon
          </Link>
        </li>
        <li>
          <Link to="/branches" className={`dnav-link ${location.pathname === '/branches' ? 'active' : ''}`}>
            Branches
          </Link>
        </li>
        <li>
          <Link to="/pastors" className={`dnav-link ${location.pathname === '/pastors' ? 'active' : ''}`}>
            Pastors
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`dnav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/resources" className={`dnav-link ${location.pathname === '/resources' ? 'active' : ''}`}>
            Resources
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
