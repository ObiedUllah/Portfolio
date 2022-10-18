import { Col, Container, Row } from "react-bootstrap";
import { EnvelopeFill, Github, Linkedin } from "react-bootstrap-icons";
import React, { Component } from "react";

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row className="align-items-center">
                        <Col size={12} sm={6}>
                            <h3>Obied Ullah</h3>
                        </Col>
                        <Col size={12} sm={6} className="text-center text-sm-end">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/obied-ullah/" target="_blank" rel="noreferrer">
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/ObiedUllah" target="_blank" rel="noreferrer">
                                    <Github />
                                </a>
                                <a href="mailto:obied.ullah@hotmail.com" target="_blank" rel="noreferrer">
                                    <EnvelopeFill />
                                </a>
                            </div>
                            <p>Copyright 2022. All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;
