import React, { useEffect, useRef } from 'react'

import { portText } from '../constant'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Port = () => {
    const horizontalRef = useRef(null)
    const sectionRef = useRef([])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let ScrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 100px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        });

        return () => {
            ScrollTween.kill();
        }
    }, []);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>포트폴리오 작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <div
                            className={`port__item p${key + 1} 
                            ${(key + 1) % 2 === 0 ? "anothor" : ""}`}
                            ref={(el) => (sectionRef.current[key] = el)}
                            key={key}
                        >
                            <span className="num">{port.num}.</span>
                            <a href={port.code} rel="noreferrer noopener">
                                <img src={port.img} alt="" />
                            </a>
                            <h3 className="title lineA">{port.title}</h3>
                            <p className="desc">
                                {port.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Port