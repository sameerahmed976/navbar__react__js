import React, { useEffect, useRef, useState } from "react";

import { links } from "./data/data.js";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaBars,
} from "react-icons/fa";

const App = () => {
  const [showLinks, setShowLinks] = useState(false);
  const refContainer = useRef(null);
  const refLink = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const height = refLink.current.getBoundingClientRect().height;
    // console.log(`* ~ file: App.jsx:24 ~ useEffect ~ height`, height);
    if (showLinks) {
      refContainer.current.style.height = `${height}px`;
    } else {
      refContainer.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <>
      <header className="header">
        <nav className="navbar__small">
          <a href="/" className="logo__container">
            <h1 className="logo">Learn New</h1>
          </a>
          <div className="bars" onClick={toggleLinks}>
            <FaBars />
          </div>
        </nav>
        <div className="links__container" ref={refContainer}>
          <ul className="navbar__small__links" ref={refLink}>
            {links.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="social">
          <section className="social__container">
            <ul className="social__links">
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBehance />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </header>
    </>
  );
};

export default App;
