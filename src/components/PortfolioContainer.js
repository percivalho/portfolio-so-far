import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './Footer';
import Avatar from '../images/avatar.png';

const styles = {
  parent: {
    backgroundColor: "#48cae4",
  },
  h1: {
    display: "inline",
    fontSize: "2.5rem",
    margin: 0,
  },
  avatar: {
    height: "auto",
    maxHeight: "3em",
    verticalAlign: "top",
    marginLeft: 10,
    display: "inline",
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Blog />;
  };
  //About Me, Portfolio, Contact, and Resume,

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div style={styles.parent}>
        <h1 style={styles.h1}>Percival</h1>
        <img style={styles.avatar} src={Avatar} alt="Avatar" class="avatar" />
        {/* // TODO: Add a comment describing what we are passing as props */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </div>


  );
}
