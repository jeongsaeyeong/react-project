import React from 'react'
import { contactText } from '../constant'

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
                        {contactText.map((contact, key) => (
                            <div key={key}>
                                <a href={contact.link}>{contact.title}</a>
                            </div>
                        ))}
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