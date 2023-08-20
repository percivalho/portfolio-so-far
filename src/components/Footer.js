import React from 'react';
//import '../styles/Header.css';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    padding: '2%',
    background: "#0096c7",
};

function Footer() {
    return (
        <footer style={styles}>
            <span>© 2023 Percival Ho</span>
        </footer>
    );
}

export default Footer;
