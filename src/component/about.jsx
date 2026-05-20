import React from "react";
import './styles/about.css';


const About = () => {
	return (
		<section className="section about" id="about">
			<div className="about-header">
				<div className="about-text">
					<p className="eyebrow">Who I Am</p>
					<h2 className="about-title">Security Expert & Full-Stack Developer</h2>
					<p className="about-intro">
						I specialize in offensive security with hands-on CTF and penetration testing experience, combined with full-stack development expertise. I bring a security-first mindset to every project.
					</p>
				</div>
				<div className="about-photo">
					<img 
						src="/src/assets/profile-photo.jpg" 
						alt="Venunye Katsekpor - Professional Photo" 
						className="profile-image"
					/>
				</div>
			</div>
			<div className="data">
				<article className="about-card about-card--primary">
					<h3>🔒 Cybersecurity (Oct 2025 - Present)</h3>
					<p><strong>Hands-on Offensive Security & CTF Expert</strong></p>
					<p>Actively practicing offensive security through practical CTF challenges and penetration testing labs:</p>
					<ul>
						<li>
							<strong>Mr. Robot (VulnHub)</strong> — enumerated services with nmap/gobuster,
							gained shell access, cracked MD5 hashes using John the Ripper.
						</li>
						<li>
							<strong>Spring Boot SSRF</strong> — exploited server-side request forgery with URL
							truncation techniques.
						</li>
						<li>
							<strong>Flask SSTI</strong> — bypassed Jinja2 blacklist to achieve server-side
							template injection.
						</li>
						<li>
							<strong>Docker Escape</strong> — escaped container via exposed Docker socket.
						</li>
					</ul>
					<p className="muted">
						<strong>Arsenal:</strong> Kali Linux, nmap, gobuster, netcat, John the Ripper, steghide, zsteg, Impacket, Active Directory (Kerberoasting, Pass-the-Hash, BloodHound)
					</p>
				</article>
				<article className="about-card">
					<h3>💻 Full-Stack Development</h3>
					<p>
						<strong>End-to-End Product Builder</strong> with security-first design philosophy
					</p>
					<p>
						I build robust full-stack applications with React, Node/Express, and SQL/NoSQL databases,
						focusing on secure architecture and reliable delivery.
					</p>
					<p className="muted">
						<strong>Recent Projects:</strong> HGBMI (QR attendance + JWT/OTP), Edifix (adaptive learning platform), KidneyCheck (health screening MVP), Codex (collaborative development platform).
					</p>
					<p className="muted">
						<strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, PostgreSQL, JWT, REST APIs
					</p>
				</article>
				<article className="about-card">
					<h3>🛠️ Tools &amp; Concepts</h3>
					<div className="tools-grid">
						<div className="tool-category">
							<strong>Security Tools:</strong>
							<ul>
								<li>Kali Linux</li>
								<li>nmap</li>
								<li>gobuster</li>
								<li>John the Ripper</li>
							</ul>
						</div>
						<div className="tool-category">
							<strong>Advanced Techniques:</strong>
							<ul>
								<li>Active Directory (Kerberoasting)</li>
								<li>Pass-the-Hash</li>
								<li>BloodHound</li>
								<li>Steganography (steghide, zsteg)</li>
							</ul>
						</div>
					</div>
					<p className="muted">
						I stay current through continuous, self-driven practice and real-world lab repetitions.
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;