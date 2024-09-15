import React from "react";
import INFO from "../../data/user";

const MySkills = () => {
	return (
		<div className="my-skills">
			{INFO.skills.map((project, index) => (
				<div className="skill-box" key={index}>
					<div className="image-box" style={{backgroundColor: project.bgColor}}>
						<img src={project.icon} alt="" />
					</div>
					<span>{project.title}</span>
				</div>
			))
			}
		</div>
	);
};

export default MySkills;
