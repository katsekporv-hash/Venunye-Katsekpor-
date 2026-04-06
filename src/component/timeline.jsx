import React from 'react';
import './styles/timeline.css';

const journey = [
  {
    year: '2022',
    title: 'Started Full Stack Journey',
    detail: 'Focused on JavaScript fundamentals, UI engineering, and problem-solving patterns.',
  },
  {
    year: '2023',
    title: 'Built Product Projects',
    detail: 'Developed dashboards, ecommerce features, and API integrations for practical workflows.',
  },
  {
    year: '2024',
    title: 'Shipped Client Work',
    detail: 'Delivered responsive interfaces and backend services with performance and reliability in mind.',
  },
  {
    year: '2025',
    title: 'Expanded Engineering Scope',
    detail: 'Improved architecture decisions, automated deployment steps, and frontend quality standards.',
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
