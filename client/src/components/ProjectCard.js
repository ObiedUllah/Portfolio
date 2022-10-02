import React, { Component } from "react";

import { Col } from "react-bootstrap";

export class ProjectCard extends Component {
	render() {
		return (
			<Col size={12} sm={6} md={4}>
				<div className="proj-imgbx">
					<img src={this.props.imgUrl} alt="Proj" />
					<div className="proj-txtx">
						<h4>{this.props.title}</h4>
						<span>{this.props.description}</span>
					</div>
				</div>
			</Col>
		);
	}
}

export default ProjectCard;
