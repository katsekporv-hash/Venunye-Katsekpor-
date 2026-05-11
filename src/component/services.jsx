import React from 'react';
import './styles/services.css';

const services = [
  {
    title: 'Cybersecurity (Offensive)',
    detail:
      'Hands-on lab work focused on enumeration, web exploitation, and container escape paths.',
  },
  {
    title: 'Full-Stack Development',
    detail:
      'React + Node/Express applications with secure authentication, data layers, and cloud deployment.',
  },
  {
    title: 'Secure Product Delivery',
    detail:
      'Practical product engineering with an emphasis on reliability, performance, and security.',
  },
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <p className="eyebrow">Primary Specialties</p>
      <h2>Cybersecurity &amp; Full-Stack</h2>
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
