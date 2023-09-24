import "animate.css";

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

import { Component } from "react";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project/anime-enma.png";
import projImg2 from "../assets/images/project/puzzle-game.png";
import projImg3 from "../assets/images/project/projects-showcase.png";
import projImg4 from "../assets/images/project/basketball-forum.png";
import projImg5 from "../assets/images/project/event-planner.png";
import projImg6 from "../assets/images/project/photo-quiz.png";
import styled from "styled-components";

const projects: { title: string; description: string; imgUrl: string; link: string }[] = [
	{
		title: "Anime Enma",
		description: "Web Application (React)",
		imgUrl: projImg1,
		link: "https://animeenma.netlify.app/",
	},
	{
		title: "Puzzle Game",
		description: "Web Application (JavaScript)",
		imgUrl: projImg2,
		link: "https://puzzling-game.netlify.app/",
	},
	{
		title: "Projects Showcase",
		description: "Web Development (Django) (Group Project)",
		imgUrl: projImg3,
		link: "https://projects-showcase-prj2-grp5.herokuapp.com/Showcase/",
	},
	{
		title: "Basketball Forum and Stats Tracker",
		description: "Web Development (Django)",
		imgUrl: projImg4,
		link: "https://nyan-goku.netlify.app/",
	},
	{
		title: "Event Planner",
		description: "Mobile Devlopment (Kotlin)",
		imgUrl: projImg5,
		link: "https://gitlab.com/barnettch26/eventplanner",
	},
	{
		title: "Photo Quiz",
		description: "Mobile Devlopment (Kotlin)",
		imgUrl: projImg6,
		link: "https://gitlab.com/ObiedUllah/photoQuiz",
	},
];

export class Projects extends Component {
	render() {
		return (
			<section className="project" id="projects">
				<Container>
					<Row>
						<Col size={12}>
							<TrackVisibility>
								{({ isVisible }) => (
									<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
										<h2>Experience</h2>
										<p></p>
										<Tab.Container id="projects-tabs" defaultActiveKey="first">
											<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
												<Nav.Item>
													<Nav.Link eventKey="first">Projects</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link eventKey="second">Education</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link eventKey="third">Work </Nav.Link>
												</Nav.Item>
											</Nav>
											<Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
												<Tab.Pane eventKey="first">
													<Row>
														{projects.map((project, index) => {
															return <ProjectCard key={index} {...project} />;
														})}
													</Row>
												</Tab.Pane>
												<Tab.Pane eventKey="second">
													<Box>
														<h4>DEC Technique - Computer Science Technology</h4>
														<h5>Dawson College, Montreal, Quebec </h5>
														<p>
															Technologies included: HTML, CSS, JavaScript, Java, C#, Python, SQL, Kotlin, Django,
															Linux, ASP.NET MVC
														</p>
														<br />
														<h4>Diploma in Full-Stack Web Development</h4>
														<h5>Concordia University, Montreal, Quebec </h5>
														<p>
															Technologies included: HTML, CSS, JavaScript, React, MongoDB, Node.js, Express, REST APIs
														</p>
													</Box>
												</Tab.Pane>
												<Tab.Pane eventKey="third">
													<Box>
														<h4>Web Development Instructor</h4>
														<h5>Concordia Bootcamps, Montreal, Quebec</h5>
														<ul style={{ color: "gray", marginTop: "10px" }}>
															<li>
																Delivered a comprehensive curriculum on web development fundamentals, covering HTML,
																CSS, JavaScript, React, Node.js, Express, and MongoDB, to a class of up to thirty-five
																students.
															</li>
															<li>
																Tailored support and guidance to meet the individual needs of students with varying
																skill levels and backgrounds. Assisted students in successfully completing coding
																exercises and projects, fostering active engagement, and promoting a deeper
																understanding of the material.
															</li>
															<li>
																Employed a diverse range of innovative teaching techniques to create an engaging and
																dynamic learning environment. These techniques enhanced student participation and
																comprehension, making complex topics more accessible
															</li>
															<li>
																Meticulously reviewed and provided constructive feedback for a high volume of up to
																twenty coding assignments and projects daily. This feedback played a pivotal role in
																students' skill development and project improvement, contributing to their overall
																success
															</li>
														</ul>
														<hr />

														<h4>Associate Technical Support Analyst (Intern)</h4>
														<h5>Tecsys, Montreal, Quebec</h5>
														<ul style={{ color: "gray", marginTop: "10px" }}>
															<li>
																Worked closely within a collaborative team environment, addressing and resolving up to
																five support tickets daily from corporate partners. Demonstrated a commitment to
																delivering consistently satisfactory results and maintaining strong working
																relationships.
															</li>
															<li>
																Leveraged SQL expertise to formulate and execute precise queries, effectively
																identifying and delivering tailored solutions for a wide array of complex issues and
																challenges.
															</li>
															<li>
																Employed specialized software tools, including OrderDynamics' order management
																platform and Agiloft, to efficiently diagnose, troubleshoot, and enhance critical
																business processes. Maintained these systems to ensure optimal performance.
															</li>
															<li>
																Played a vital role in ensuring server stability by performing routine maintenance
																tasks. Leveraged tools like Datadog and Remote Desktop Manager to proactively monitor
																and address potential issues, thus ensuring uninterrupted business operations.
															</li>
															<li>
																Actively engaged in daily scrum meetings each morning, collaborating with the team to
																plan workloads, share insights, and discuss ongoing support tickets. This
																participation contributed to streamlined workflows and effective issue resolution.
															</li>
														</ul>
														<hr />
														<h4>Manager </h4>
														<h5>Pizza St-Laurent, Montreal, Quebec</h5>
														<ul style={{ color: "gray", marginTop: "10px" }}>
															<li>
																Spearheaded the development and enforcement of standardized procedures, ensuring
																operational consistency and quality across all aspects of the business.
															</li>
															<li>
																Delivered prompt, courteous, and personalized customer service in both face-to-face
																interactions and over the phone, resulting in heightened customer satisfaction and
																loyalty
															</li>
															<li>
																Demonstrated exceptional precision and diligence in cash handling, achieving a
																flawless record of 100% accuracy in cash management and reconciliation for every shift
																worked
															</li>
															<li>
																Acted as a mentor and trainer for four new employees, fostering their growth and
																development to consistently surpass performance targets and contribute to the
																organization's success.
															</li>
														</ul>
													</Box>
												</Tab.Pane>
											</Tab.Content>
										</Tab.Container>
									</div>
								)}
							</TrackVisibility>
						</Col>
					</Row>
				</Container>
				<img className="background-image-right" src={colorSharp2} alt="img" />
			</section>
		);
	}
}

const Box = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	ul {
		width: 60%;
	}
	li {
	}
`;

export default Projects;
