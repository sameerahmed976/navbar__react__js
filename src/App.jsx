import React, { useEffect, useRef, useState } from "react";

import { links, social } from "./data/data.js";
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

        {/* <aside className="sidebar">
          <section className="sidebar__container">
            <ul>
              {links.map((item) => {
                return (
                  <li>
                    <a href={item.url}>{item.text}</a>
                  </li>
                );
              })}
            </ul>
          </section>
        </aside> */}
      </header>
    </>
  );
};

export default App;
