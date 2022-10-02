import "animate.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/images/header-img.svg";

export class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loopNum: "home",
			isDeleting: "false",
			text: "",
			delta: 300 - Math.random() * 100,
			index: 1,
		};
		this.toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
		this.period = 2000;
	}

	componentWillReceiveProps = (nextProps) => {
		setInterval(() => {
			this.tick();
		}, this.state.delta);
	};

	tick() {
		let i = this.state.loopNum % this.toRotate.length;
		let fullText = this.toRotate[i];
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
			this.setState({ delta: this.period });
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
											{`Hi! I'm Obied`}{" "}
											<span
												className="txt-rotate"
												dataPeriod="1000"
												data-rotate='[ "Full Stack Developer", "Computer Scientist", "Sodtware Developer" ]'
											>
												<span className="wrap">{this.statetext}</span>
											</span>
										</h1>
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
											industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
											scrambled it to make a type specimen book.
										</p>
										<button onClick={() => console.log("connect")}>
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
