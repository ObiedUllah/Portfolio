import "animate.css";

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import React, { Component } from "react";

import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project/anime-enma.png";
import projImg2 from "../assets/images/project/puzzle-game.png";
import projImg3 from "../assets/images/project/projects-showcase.png";
import projImg4 from "../assets/images/project/basketball-forum.png";
import projImg5 from "../assets/images/project/event-planner.png";
import projImg6 from "../assets/images/project/photo-quiz.png";
import styled from "styled-components"

const projects: { title: string, description: string, imgUrl: string, link: string }[] = [{
    title: "Anime Enma",
    description: "Web Application (React)",
    imgUrl: projImg1,
    link: "https://anime-enma.herokuapp.com/"
},
{
    title: "Puzzle Game",
    description: "Web Application (JavaScript)",
    imgUrl: projImg2,
    link: "https://puzzling-game.netlify.app/"
},
{
    title: "Projects Showcase",
    description: "Web Development (Django) (Group Project)",
    imgUrl: projImg3,
    link: "https://projects-showcase-prj2-grp5.herokuapp.com/Showcase/"

},
{
    title: "Basketball Forum and Stats Tracker",
    description: "Web Development (Django)",
    imgUrl: projImg4,
    link: "#"

},
{
    title: "Event Planner",
    description: "Mobile Devlopment (Kotlin)",
    imgUrl: projImg5,
    link: "https://gitlab.com/barnettch26/eventplanner"

},
{
    title: "Photo Quiz",
    description: "Mobile Devlopment (Kotlin)",
    imgUrl: projImg6,
    link: "https://gitlab.com/ObiedUllah/photoQuiz"

},];

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
                                        <p>

                                        </p>
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
                                                            Technologies included: HTML, CSS, JavaScript, Java, C#, Python, SQL, Kotlin, Django, Linux, ASP.NET MVC
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
                                                        <h4>Associate Technical Support Analyst (Intern)</h4>
                                                        <h5>Tecsys, Montreal, Quebec</h5>
                                                        <ul style={{ color: "gray", marginTop: "10px" }}>
                                                            <li><span>Worked in teams to solve tickets from corporate partners while offering&nbsp;</span><span>professional service</span></li>
                                                            <li><span>Queried SQL statements to provide solutions for differing problems</span></li>
                                                            <li><span>Utilized OrderDynamics&rsquo; order management platform to debug and maintain business processes</span></li>
                                                            <li><span>Performed server maintenance to provide stability using Datadog and Remote Desktop Manager</span></li>
                                                            <li><span>Utilized Agiloft to manage business processes&nbsp;</span></li>
                                                        </ul>
                                                        <hr />
                                                        <h4>Manager</h4>
                                                        <h5>Pizza St-Laurent, Montreal, Quebec</h5>
                                                        <ul style={{ color: "gray", marginTop: "10px" }}>
                                                            <li><span>Responsible for ensuring that standards are consistent </span></li>
                                                            <li><span>Offered fast and friendly customer service in person or by phone to ensure customer satisfaction</span></li>
                                                            <li><span>Counted cash in register drawer at the beginning and end of the shift</span></li>
                                                            <li><span>Mentored and trained new employees</span></li>
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
`;

export default Projects;
