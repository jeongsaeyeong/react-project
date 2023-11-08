import React from 'react'

const Header = () => {
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">PORTFOLIO</a>
                </div>
                <div className="header__nav" role="navigation" aria-label="메인 메뉴">
                    <ul>
                        <li>
                            <a href="#intro">INTRO</a>
                        </li>
                        <li>
                            <a href="#skill">SKILL</a>
                        </li>
                        <li>
                            <a href="#site">SITE</a>
                        </li>
                        <li>
                            <a href="#port">PORTFOLIO</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
                <div className="header__nav__mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded="false"
                    role="button">
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header