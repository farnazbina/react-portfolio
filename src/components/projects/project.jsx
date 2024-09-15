import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { title, description, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={"/project/" + (link)}>
					<div className="project-container">
						<div className="project-logo">
							{/* <img src={logo} alt="logo" /> */}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-text">View Details</div>
							
							<FontAwesomeIcon
								style={{ fontSize: "12px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
