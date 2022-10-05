import "animate.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/images/header-img.svg";

const toRotate: string[] = ["Computer Scientist", "Front-end Developer", "Back-end Developer"];
const period: number = 2000;
let ticker: any = null;

type State = {
    loopNum: number,
    isDeleting: boolean,
    text: string,
    delta: number,
    index: number,
}

export class Banner extends Component<{}, State> {
    state: State = {
        loopNum: 0,
        isDeleting: false,
        text: "",
        delta: 300 - Math.random() * 100,
        index: 1,
    }

    componentWillMount = () => {
        ticker = setInterval(() => {
            this.tick();
        }, this.state.delta);
    };

    componentWillUnmount = () => {
        clearInterval(ticker);
    };

    tick() {
        let i = this.state.loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = this.state.isDeleting
            ? fullText.substring(0, this.state.text.length - 1)
            : fullText.substring(0, this.state.text.length + 1);

        this.setState({ text: updatedText });

        if (this.state.isDeleting) {
            this.setState({ delta: this.state.delta / 2 });
        }

        if (!this.state.isDeleting && updatedText === fullText) {
            this.setState({ isDeleting: true });
            this.setState({ index: this.state.index - 1 });
            this.setState({ delta: period });
        } else if (this.state.isDeleting && updatedText === "") {
            this.setState({ isDeleting: false });
            this.setState({ loopNum: this.state.loopNum + 1 });
            this.setState({ index: 1 });
            this.setState({ delta: 500 });
        } else {
            this.setState({ index: this.state.index + 1 });
        }
    }

    render() {
        return (
            <section className="banner" id="home">
                <Container>
                    <Row className="aligh-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline">Welcome to my Portfolio</span>
                                        <h1>
                                            {`Hi! I'm Obied, `}
                                            <span
                                                className="txt-rotate"
                                                data-rotate={toRotate}
                                            >
                                                <span className="wrap">{this.state.text}</span>
                                            </span>
                                        </h1>
                                        <p>
                                            I am a motivated programmer who enjoys taking on difficult challenges and improving my skills in any facet of life.
                                            I have a DEC in Computer Science at Dawson College and a Diploma in Full-Stack Web Development at Concordia University.
                                            The numerous challenges I have encountered have helped me acquire analytical and problem-solving skills.
                                        </p>
                                        <button onClick={() => window.location.href = "https://www.linkedin.com/in/obied-ullah/"}>
                                            Let’s Connect <ArrowRightCircle size={25} />
                                        </button>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={headerImg} alt="Header Img" />
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Banner;
