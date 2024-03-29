import "animate.css";

import { Col, Container, Row } from "react-bootstrap";

import { Component } from "react";
import TrackVisibility from "react-on-screen";
import { contact } from "src/apis/apiConfig";
import contactImg from "../assets/images/contact.png";

const formInitialDetails = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	message: "",
};

type State = {
	formDetails: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		message: string;
	};
	buttonText: string;
	status: { success?: boolean; message?: string };
};

export class Contact extends Component<{}, State> {
	state: State = {
		formDetails: formInitialDetails,
		buttonText: "Send",
		status: {},
	};

	onFormUpdate(category: string, value: string) {
		this.setState({
			formDetails: {
				...this.state.formDetails,
				[category]: value,
			},
		});
	}

	async handleSubmit(e: any) {
		e.preventDefault();
		this.setState({ buttonText: "Sending..." });
		let response = await fetch(contact, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(this.state.formDetails),
		});
		this.setState({ buttonText: "Send..." });
		let result = await response.json();
		this.setState({ formDetails: formInitialDetails });

		if (result.code === 200) {
			this.setState({ status: { success: true, message: "Message sent successfully" } });
		} else {
			this.setState({ status: { success: false, message: "Something went wrong, please try again later." } });
		}
	}

	render() {
		return (
			<section className="contact" id="connect">
				<Container>
					<Row className="align-items-center">
						<Col size={12} md={6}>
							<TrackVisibility>
								{({ isVisible }: { isVisible: boolean }) => (
									<img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
								)}
							</TrackVisibility>
						</Col>
						<Col size={12} md={6}>
							<TrackVisibility>
								{({ isVisible }: { isVisible: boolean }) => (
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
														rows={6}
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
