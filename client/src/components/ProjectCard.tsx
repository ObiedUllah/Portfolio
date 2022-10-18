import React, { Component } from "react";

import { Col } from "react-bootstrap";

type Props = {
    imgUrl: string,
    title: string,
    description: string,
    link: string
}
export class ProjectCard extends Component<Props, {}> {
    render() {
        return (
            <Col size={12} sm={6} md={4}>
                <div className="proj-imgbx">
                    <a href={this.props.link} style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer">
                        <img src={this.props.imgUrl} alt="Proj" />
                        <div className="proj-txtx">
                            <h4>{this.props.title}</h4>
                            <span>{this.props.description}</span>
                        </div>
                    </a>

                </div>
            </Col>
        );
    }
}

export default ProjectCard;
