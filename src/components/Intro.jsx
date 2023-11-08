import React from 'react'

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">
                    MAKE NEW WORLD
                </h1>

                <div className="intro__lineAs" aria-hidden="true">
                    <span className="lineA"></span>
                    <span className="lineA"></span>
                    <span className="lineA"></span>
                    <span className="lineA"></span>
                    <span className="lineA"></span>
                </div>
                <div className="intro__text">
                    <div className="intro_img">
                        <div className="profile"></div>
                    </div>
                    <div className="text">
                        <div>How can we</div>
                        <div>Create</div>
                        <div>New world?</div>
                    </div>
                </div>

                <div className="intro__lineAs bottom" aria-hidden="true">
                    <span className="lineA"></span>
                    <span className="lineA"></span>
                    <span className="lineA"></span>
                    <span className="lineA"></span>
                    <span className="lineA"></span>
                    <span className="lineA"></span>
                </div>
            </div>
        </section>
    )
}

export default Intro