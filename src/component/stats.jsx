import React, { useEffect, useRef, useState } from 'react';
import './styles/stats.css';

const metrics = [
  { value: 4, suffix: '+', label: 'Years Building' },
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 8, suffix: '+', label: 'Tech Stacks Used' },
  { value: 100, suffix: '%', label: 'Client Focus' },
];

const Stats = () => {
  const [displayValues, setDisplayValues] = useState(metrics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) {
          return;
        }

        setHasAnimated(true);

        metrics.forEach((metric, index) => {
          let current = 0;
          const step = Math.max(1, Math.ceil(metric.value / 45));
          const timer = setInterval(() => {
            current += step;
            if (current >= metric.value) {
              current = metric.value;
              clearInterval(timer);
            }

            setDisplayValues((prev) => {
              const next = [...prev];
              next[index] = current;
              return next;
            });
          }, 24);
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="section stats" id="stats" ref={sectionRef}>
      <p className="eyebrow">Impact</p>
      <h2>Numbers That Matter</h2>
      <div className="stats-grid">
        {metrics.map((metric, index) => (
          <div key={metric.label} className="metric-card">
            <p className="metric-value">
              {displayValues[index]}
              {metric.suffix}
            </p>
            <p className="metric-label">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
