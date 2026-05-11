import React from "react";
import './styles/about.css';


const About = () => {
	return (
		<section className="section about" id="about">
			<p className="eyebrow">Who I Am</p>
			<h2 className="about-title">About Me</h2>
			<div className="data">
				<article className="about-card">
					<h3>Full-Stack Development</h3>
					<p>
						I build end-to-end products with React, Node/Express, and SQL/NoSQL data
						stores, focusing on reliable delivery and secure-by-design interfaces.
					</p>
					<p className="muted">
						Recent builds include HGBMI (QR attendance + JWT/OTP), Edifix (stage-based
						learning), KidneyCheck (health screening MVP), and Codex (collaborative
						full-stack delivery).
					</p>
				</article>
				<article className="about-card">
					<h3>Cybersecurity (Oct 2025 - Present)</h3>
					<p>Actively practicing offensive security through hands-on CTF challenges and labs:</p>
					<ul>
						<li>
							<strong>Mr. Robot (VulnHub)</strong> — enumerated services with nmap/gobuster,
							gained a shell as the daemon user, cracked MD5 hashes using John the Ripper.
						</li>
						<li>
							<strong>Spring Boot SSRF</strong> — exploited server-side request forgery with URL
							truncation techniques.
						</li>
						<li>
							<strong>Flask SSTI</strong> — bypassed a Jinja2 blacklist to achieve server-side
							template injection.
						</li>
						<li>
							<strong>Docker Escape</strong> — escaped a container via an exposed Docker socket.
						</li>
					</ul>
				</article>
				<article className="about-card">
					<h3>Tools &amp; Concepts</h3>
					<ul>
						<li>Kali Linux</li>
						<li>nmap</li>
						<li>gobuster</li>
						<li>netcat</li>
						<li>John the Ripper</li>
						<li>steghide</li>
						<li>zsteg</li>
						<li>Impacket</li>
						<li>Active Directory: Kerberoasting, Pass-the-Hash, BloodHound</li>
					</ul>
					<p className="muted">
						I stay current through continuous, self-driven practice and real-world
						lab repetitions.
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
