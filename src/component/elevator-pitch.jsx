import React from 'react';
import './styles/elevator-pitch.css';

const ElevatorPitch = () => {
  return (
    <section className="section elevator-pitch" id="video">
      <p className="eyebrow">Quick Overview</p>
      <h2 className="elevator-pitch-title">About Me in 60 Seconds</h2>
      
      <div className="video-container">
        <iframe
          src="https://drive.google.com/file/d/13jOeaBSJop6ElDy_l0cECiaTaKdwpCXC/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          title="Venunye Katsekpor - Elevator Pitch"
          className="video-iframe"
        ></iframe>
      </div>
      
      <p className="video-description">
        A quick overview of my background, skills, and what I'm looking for in my next role.
      </p>
    </section>
  );
};

export default ElevatorPitch;