import React from 'react';
import './styles/timeline.css';

const journey = [
  {
    year: '2023',
    title: 'Full-Stack Foundations',
    detail: 'Strengthened React UI delivery, API patterns, and reliable data workflows.',
  },
  {
    year: '2024',
    title: 'Product Delivery',
    detail: 'Shipped end-to-end features with secure authentication, deployments, and QA routines.',
  },
  {
    year: '2025',
    title: 'Cybersecurity Track (Oct 2025)',
    detail: 'Started offensive security labs with a focus on web exploitation and escalation.',
  },
  {
    year: '2026',
    title: 'CTF & Security Tooling',
    detail: 'Hands-on labs in SSRF, SSTI, Docker escape paths, and Active Directory concepts.',
  },
];

const Timeline = () => {
  return (
    <section className="section timeline" id="timeline">
      <p className="eyebrow">Journey</p>
      <h2>Experience Timeline</h2>

      <div className="timeline-list">
        {journey.map((item) => (
          <article key={item.year} className="timeline-item">
            <p className="timeline-year">{item.year}</p>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
