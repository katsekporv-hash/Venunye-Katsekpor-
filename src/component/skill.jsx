import React from 'react';
import './styles/skill.css';
//imported images
import rect from '../assets/react.svg';
import css from '../assets/css3.svg';
import html from '../assets/html5.svg';
import js from '../assets/js.svg';
import python from '../assets/python.svg';
import node from '../assets/node-js.svg';
import javac from '../assets/java.svg';

const stack = [
  { name: 'React', icon: rect, level: 90 },
  { name: 'HTML', icon: html, level: 95 },
  { name: 'JavaScript', icon: js, level: 88 },
  { name: 'CSS', icon: css, level: 90 },
  { name: 'Python', icon: python, level: 84 },
  { name: 'Node.js', icon: node, level: 82 },
  { name: 'Java', icon: javac, level: 72 },
];

const Skill = () => {
  return (
    <section className="section skills" id="skills">
      <p className="eyebrow">Toolkit</p>
      <h2 className="tit">Skills</h2>
      <div id="skillset">
        {stack.map((item) => (
          <article className="skill" key={item.name}>
            <div className="skill-head">
              <img src={item.icon} className="skill-icon" alt={`${item.name} icon`} />
              <p className="skill-name">{item.name}</p>
            </div>
            <div className="bar">
              <span style={{ width: `${item.level}%` }} />
            </div>
            <small>{item.level}%</small>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Skill;