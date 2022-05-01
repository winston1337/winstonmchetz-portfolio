import React from "react";
import './Bio.scss';
import LogoBox from '../logo/LogoBox';

const Bio = () => {
    return (
      <>
<LogoBox />
      <section className="about-section">
        <section className="about-wrapper">
          <h1 className="main-heading">Bio</h1>
          <br/>
          <br/>
          <section className="about-me">
            <p>
              My name is Winston McHetz, and I currently work as an Associate Software Engineer at Lowe's. I'm always learning new tools, and expanding my knowledge so I can improve my craft. In my freetime, I like to play video games, or watch movies or anime. I'm also a car enthusiast.
            </p>
          </section>
        </section>
      </section>

      <section className="about-section">
        <section className="about-wrapper">
          <h1 className="main-heading">Skills</h1>
          <br/>
          <br/>
          <section className="about-me">
            <p>
              My skills include HTML, CSS, Javascript, React,
              NodeJS, ExpressJS, MySQL, and building and integrating APIs.
            </p>
          </section>
        </section>
      </section>
      </>
    );
  };
  
  export default Bio;