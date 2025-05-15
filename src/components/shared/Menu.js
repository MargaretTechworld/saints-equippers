import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '../../styles/menu.css';
import { FaHome, FaBible } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { GrResources } from 'react-icons/gr';
import { GiLightningBranches } from 'react-icons/gi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { MdContactPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Menu = ({ closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu(); // Close the menu when a link is clicked
  };

  return (
    <div>
      <ul className="menu-nav">
        <li>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>
            <FaHome className="nav-icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={handleLinkClick}>
            <FcAbout className="nav-icon" />
            About
          </Link>
        </li>
        <li>
          <Link to="/sermon" className="nav-link" onClick={handleLinkClick}>
            <FaBible className="nav-icon" />
            Sermon
          </Link>
        </li>
        <li>
          <Link to="/branches" className="nav-link" onClick={handleLinkClick}>
            <GiLightningBranches className="nav-icon" />
            Branches
          </Link>
        </li>
        <li>
          <Link to="/pastors" className="nav-link" onClick={handleLinkClick}>
            <FaPeopleGroup className="nav-icon" />
            Pastors
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
            <MdContactPhone className="nav-icon" />
            Contact
          </Link>
        </li>
        <li>
          <Link to="/resources" className="nav-link" onClick={handleLinkClick}>
            <GrResources className="nav-icon" />
            Resources
          </Link>
        </li>
      </ul>
    </div>
  );
};

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
