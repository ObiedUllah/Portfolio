import "animate.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import TrackVisibility from "react-on-screen";
import contactImg from "../assets/images/contact-img.svg";

export class Contact extends Component {
	constructor(props) {
		super(props);
		this.formInitialDetails = {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			message: "",
		};

		this.state = {
			formDetails: this.formInitialDetails,
			buttonText: "Send",
			status: {},
		};
	}

	onFormUpdate(category, value) {
		this.setState({
			formDetails: {
				...this.state.formDetails,
				[category]: value,
			},
		});
	}

	async handleSubmit(e) {
		e.preventDefault();
		this.setState({ buttonText: "Sending..." });
		let response = await fetch("http://localhost:5000/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(this.state.formDetails),
		});
		this.setState({ buttonText: "Send..." });
		let result = await response.json();
		this.setState({ formDetails: this.formInitialDetails });

		if (result.code === 200) {
			this.setState({ status: { succes: true, message: "Message sent successfully" } });
		} else {
			this.setState({ status: { succes: false, message: "Something went wrong, please try again later." } });
		}
	}

	render() {
		return (
			<section className="contact" id="connect">
				<Container>
					<Row className="align-items-center">
						<Col size={12} md={6}>
							<TrackVisibility>
								{({ isVisible }) => (
									<img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
								)}
							</TrackVisibility>
						</Col>
						<Col size={12} md={6}>
							<TrackVisibility>
								{({ isVisible }) => (
									<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
										<h2>Get In Touch</h2>
										<form onSubmit={(e) => this.handleSubmit(e)}>
											<Row>
												<Col size={12} sm={6} className="px-1">
													<input
														type="text"
														value={this.state.formDetails.firstName}
														placeholder="First Name"
														onChange={(e) => this.onFormUpdate("firstName", e.target.value)}
													/>
												</Col>
												<Col size={12} sm={6} className="px-1">
													<input
														type="text"
														value={this.state.formDetails.lastName}
														placeholder="Last Name"
														onChange={(e) => this.onFormUpdate("lastName", e.target.value)}
													/>
												</Col>
												<Col size={12} sm={6} className="px-1">
													<input
														type="email"
														value={this.state.formDetails.email}
														placeholder="Email Address"
														onChange={(e) => this.onFormUpdate("email", e.target.value)}
													/>
												</Col>
												<Col size={12} sm={6} className="px-1">
													<input
														type="tel"
														value={this.state.formDetails.phone}
														placeholder="Phone No."
														onChange={(e) => this.onFormUpdate("phone", e.target.value)}
													/>
												</Col>
												<Col size={12} className="px-1">
													<textarea
														rows="6"
														value={this.state.formDetails.message}
														placeholder="Message"
														onChange={(e) => this.onFormUpdate("message", e.target.value)}
													></textarea>
													{this.state.status.message && (
														<Row>
															<p className={this.state.status.success === false ? "danger" : "success"}>
																{this.state.status.message}
															</p>
														</Row>
													)}
													<button type="submit">
														<span>{this.state.buttonText}</span>
													</button>
												</Col>
											</Row>
										</form>
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

export default Contact;
