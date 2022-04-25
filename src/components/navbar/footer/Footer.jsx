import React from 'react';
import './Footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer>
      <section className="footer-text">
        <h1>© 2022 Winston McHetz</h1>
      </section>
      <section className="footer-icons">
        <section className="icon-wrapper">
          <a href="https://www.linkedin.com/in/winstonmchetz/" target="_blank" rel="noreferrer noopener">
            <LinkedInIcon fontSize="large" />
          </a>
        </section>
        <section className="icon-wrapper">
          <a href="https://github.com/winston1337" target="_blank" rel="noreferrer noopener">
            <GitHubIcon fontSize="large" />
          </a>
        </section>

      </section>
    </footer>
    )
}

export default Footer;