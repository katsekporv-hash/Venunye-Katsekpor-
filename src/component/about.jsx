import React from "react";
import './styles/about.css';


const About = () => {
	return (
		<section className="section about" id="about">
			<p className="eyebrow">Who I Am</p>
			<h2 className="about-title">About Me</h2>
			<div className="data">
				<p className="paragraph">
					I am a full stack developer with years of experience building web,
					mobile, and backend applications. My work is driven by analytical
					thinking, careful problem solving, and a love for efficient,
					user-focused systems.
				</p>
				<p className="paragraph">
					I specialize in modern JavaScript ecosystems and practical product
					engineering. Outside of coding, I enjoy drawing and reading books on
					personal and mental growth.
				</p>
			</div>
		</section>
	);
};

export default About;