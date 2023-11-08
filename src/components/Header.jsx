import React, { useState } from 'react'

import { headerNav } from '../constant'

const Header = () => {

  const [show, setshow] = useState(false);

  const toggleMenu = () => {
    setshow((prevShow) => !prevShow);
  }

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">PORTFOLIO</a>
        </div>
        <div className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "false" : "true"}
          role="button"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header