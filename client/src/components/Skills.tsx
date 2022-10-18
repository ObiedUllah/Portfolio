import "react-multi-carousel/lib/styles.css";

import React, { Component } from "react";

import Carousel from "react-multi-carousel";
import colorSharp from "../assets/images/color-sharp.png";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export class Skills extends Component {

    render() {
        return (
            <section className="skill" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <h2>Skills</h2>
                                <p>
                                    I am capable of writing clear and concise code in multiple programming languages.<br></br>
                                    Front-end : HTML, CSS, React, Django, Kotlin, Redux <br></br>
                                    Back-end : JavaScript, Java, C#, Python, Oracle SQL, MySQL, MongoDB, Node.js, Express, REST APIs, TypeScript
                                </p>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <div className="item">
                                        <img src={meter1} alt="Img" />
                                        <h5>Web Development</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="Img" />
                                        <h5>Android (Kotlin)</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter3} alt="Img" />
                                        <h5>Python & Django</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="Img" />
                                        <h5>Java</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter3} alt="Img" />
                                        <h5>C#</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="Img" />
                                        <h5>SQL</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="background-image-left" src={colorSharp} alt="Img" />
            </section>
        );
    }
}

export default Skills;
