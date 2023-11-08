import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact <em>연락처</em></h2>
                <div className="contact__text">

                    <div className="contact__line" aria-hidden="true">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>

                    <div className="text">
                        <div>
                            <a href="/">EMAIL : jeongsaeyeong@gmail.com</a><br />
                            <a href="/">NAVER : ooooo0516@naver.com</a>
                        </div>
                    </div>

                    <div className="contact__line" aria-hidden="true">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact