import React from "react";
import './styles/intro.css';
import download from '../assets/download.svg';
import cvFile from '../assets/elvin.txt';
import imgProfile from '../assets/profile.jpg.jpg';
const Intro = () => {
	return (
		<section className="section intro" id="home">
			<div className="intro-copy">
				<p className="eyebrow">Portfolio 2026</p>
				<h1 id="fullName">Venunye Katsekpor</h1>
				<p id="spec">Cybersecurity &amp; Full-Stack Developer</p>
				<p id="abt">
					I design secure, performant web products and sharpen offensive security
					skills through hands-on labs, CTFs, and self-driven learning.
				</p>

				<div className="intro-actions">
					<a className="cvDownload" href={cvFile} download>
						download cv <img src={download} height={12} width={12} alt="download icon" />
					</a>
					<a className="contact" href="#contact">
						contact
					</a>
				</div>
			</div>

			<div className="profile_picture">
				<img
					id="profilepic"
					src={imgProfile}
					width={280}
					height={280}
					alt="Portrait of Elvin Owusu"
				/>
			</div>
		</section>
	);
};
export default Intro;
