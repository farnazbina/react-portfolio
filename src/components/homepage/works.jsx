import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							{/* <img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/> */}
							<div className="work-title">Freelance Frontend Developer</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							{/* <div className="work-duration">Present</div> */}
						</div>
						<div className="work">
							{/* <img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/> */}
							<div className="work-title">Doctor Online Plus</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">Oct 2023 - Sep 2024</div>
						</div>

						<div className="work">
							{/* <img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/> */}
							<div className="work-title">Romina Co</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">Feb 2022 - Sep 2023</div>
						</div>

						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Memaran Dadeh</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">Nov 2020 - Nov 2021</div>
						</div>

						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Memaran Dadeh</div>
							<div className="work-subtitle">
								User Interface Designer
							</div>
							<div className="work-duration">Aug 2020 - Dec 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
