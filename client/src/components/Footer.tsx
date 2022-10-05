import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import { Linkedin } from "react-bootstrap-icons";

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
                                <a href="https://www.linkedin.com/in/obied-ullah/">
                                    <Linkedin />
                                </a>
                                <a href="https://www.linkedin.com/in/obied-ullah/">
                                    <Linkedin />
                                </a>
                                <a href="https://www.linkedin.com/in/obied-ullah/">
                                    <Linkedin />
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
