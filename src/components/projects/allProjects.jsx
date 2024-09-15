import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = (props) => {
	return (
		<div className="all-projects-container">
			{props.fromHome ? 
				<>
					{INFO.projects.slice(0,6).map((project, index) => (
						<div className="all-projects-project" key={index}>
							<Project
								logo={project.logo}
								title={project.title}
								description={project.description}
								linkText={project.linkText}
								link={project.link}
							/>
						</div>
					))
					}
					<div className="see-more-link">
						<Link to="/projects">
							See More{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</>
				: <>
					{INFO.projects.map((project, index) => (
						<div className="all-projects-project" key={index}>
							<Project
								logo={project.logo}
								title={project.title}
								description={project.description}
								linkText={project.linkText}
								link={project.link}
							/>
						</div>
					))
					}
				</>}
		</div>
	);
};

export default AllProjects;
