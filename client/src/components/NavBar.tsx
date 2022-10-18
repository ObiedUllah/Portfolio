import { EnvelopeFill, Github, Linkedin } from "react-bootstrap-icons";
import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import { HashLink } from "react-router-hash-link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

type State = {
    activeLink: string,
    scrolled: string
}

export class NavBar extends Component<{}, State> {
    state: State = {
        activeLink: "home",
        scrolled: "false"
    }

    componentWillMount = () => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                this.setState({
                    scrolled: "true",
                });
            } else {
                this.setState({
                    scrolled: "false",
                });
            }
        };

        window.addEventListener("scroll", onScroll);
    };


    onUpdateActiveLink(value: string) {
        console.log(value);
        this.setState({ activeLink: value });
    }

    render() {
        return (
            <Navbar expand="lg" className={this.state.scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home" className="title">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                href="#home"
                                className={this.state.activeLink === "home" ? "active navbar-link" : "navbar-link"}
                                onClick={() => this.onUpdateActiveLink("home")}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={this.state.activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                                onClick={() => this.onUpdateActiveLink("skills")}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={this.state.activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                                onClick={() => this.onUpdateActiveLink("projects")}
                            >
                                Experience
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/obied-ullah/" target="_blank" rel="noreferrer">
                                    <Linkedin />
                                </a>
                            </div>
                            <div className="social-icon">
                                <a href="https://github.com/ObiedUllah" target="_blank" rel="noreferrer">
                                    <Github />
                                </a>
                            </div>
                            <div className="social-icon">
                                <a href="mailto:obied.ullah@hotmail.com" target="_blank" rel="noreferrer">
                                    <EnvelopeFill />
                                </a>
                            </div>
                            <HashLink to="#connect">
                                <button className="vvd">
                                    <span>Let's Connect</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;
