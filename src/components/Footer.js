import React from 'react';
//import '../styles/Header.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import meta from '../images/meta.png';

const styles = {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    background: "#0096c7",
};

const socialStyle = {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    padding: "1%",
}

const imgStyle = {
    width: 32,
}

function Footer() {
    return (
        <footer style={styles}>
            <div style={socialStyle}>
                <a href="https://github.com/percivalho"><img
                    src={github}
                    alt="github"
                    style={imgStyle}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.6}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
                <a href="https://www.linkedin.com"><img
                    src={linkedin}
                    alt="linkedin"
                    style={imgStyle}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.6}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
                <a href="https://www.facebook.com"><img
                    src={meta}
                    alt="meta"
                    style={imgStyle}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.6}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
            </div>
            <span>© 2023 Percival Ho</span>
        </footer>
    );
}

export default Footer;
