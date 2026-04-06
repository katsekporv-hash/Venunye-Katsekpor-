import React from 'react';
import './styles/services.css';

const services = [
  {
    title: 'Full Stack Development',
    detail:
      'From robust APIs to polished interfaces, I build complete products that scale.',
  },
  {
    title: 'UI Engineering',
    detail:
      'Design-driven components with responsive layouts, smooth motion, and accessible markup.',
  },
  {
    title: 'Performance Optimization',
    detail:
      'I improve load times, rendering speed, and maintainability for long-term product health.',
  },
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <p className="eyebrow">What I Do</p>
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((item) => (
          <article className="service-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
