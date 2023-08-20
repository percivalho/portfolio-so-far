import React, { useState } from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
const styles = {
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  listStyle: "none",
  padding: 0,
  margin: 0,
}

function NavTabs({ currentPage, handlePageChange }) {
  // add a state for hover
  const [hoveredLink, setHoveredLink] = useState(null);
  // the style for making the text bold
  const linkStyle = (pageName) => ({
    fontWeight: hoveredLink === pageName ? 'bold' : 'normal'
  });
  return (
    <ul className="nav nav-tabs" style={styles}>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          onMouseEnter={() => setHoveredLink('About Me')}
          onMouseLeave={() => setHoveredLink(null)}
          style={linkStyle('About Me')}
          className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing
          onMouseEnter={() => setHoveredLink('Portfolio')}
          onMouseLeave={() => setHoveredLink(null)}
          style={linkStyle('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          //  TODO: Add a comment explaining what this logic is doing
          onMouseEnter={() => setHoveredLink('Contact')}
          onMouseLeave={() => setHoveredLink(null)}
          style={linkStyle('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          //  TODO: Add a comment explaining what this logic is doing
          onClick={() => handlePageChange('Resume')}
          onMouseEnter={() => setHoveredLink('Resume')}
          onMouseLeave={() => setHoveredLink(null)}
          style={linkStyle('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
