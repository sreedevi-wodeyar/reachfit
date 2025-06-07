import React from 'react';

// Timeline stepper for trainer's journey/certifications
const timeline = [
  { year: '2017', event: 'Certified Personal Trainer (ACE)' },
  { year: '2025', event: 'Started ReachFit' },
  { year: '2025', event: 'Certified Nutrition Coach' },
  { year: '2017', event: 'Yoga Instructor Certification' },
  { year: '2025', event: '100+ Happy Clients' },
];

// Animated skill bars
const skills = [
  { label: 'Coaching', percent: 95 },
  { label: 'Nutrition', percent: 90 },
  { label: 'Motivation', percent: 98 },
  { label: 'Yoga', percent: 85 },
];

// About page for ReachFit: describes the trainer, mission, and approach
function About() {
  return (
    <section className="page about-section">
      {/* Main heading (short) */}
      <h1>About ReachFit</h1>
      {/* Trainer introduction and mission */}
      <p>
        Welcome to ReachFit! I am passionate about helping people transform their lives through fitness, nutrition, and a positive mindset. With years of experience and multiple certifications, I have guided hundreds of clients to achieve their goals—whether it's weight loss, muscle gain, or overall wellness.
      </p>
      {/* Timeline squares */}
      <div className="about-timeline-grid">
        {timeline.map((item, idx) => (
          <div className="about-timeline-card" key={idx}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-event">{item.event}</div>
          </div>
        ))}
      </div>
      {/* Skill squares */}
      <div className="about-skills-grid">
        {skills.map((s, idx) => (
          <div className="about-skill-card" key={idx}>
            <div className="skill-label">{s.label}</div>
            <div className="skill-percent">{s.percent}%</div>
          </div>
        ))}
      </div>
      {/* Fun facts squares */}
      <div className="about-facts-grid">
        <div className="about-fact-card">ReachFit clients have obtained a lot of benefits!</div>
        <div className="about-fact-card">We offer online coaching worldwide.</div>
        <div className="about-fact-card">Our community events are open to all fitness levels.</div>
      </div>
      {/* Women's Health Expertise Section */}
      <div className="about-womens-health">
        <h2>Women's Health Expertise</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li>Fibroids & Reproductive Health</li>
          <li>Diastasis Recti Recovery</li>
          <li>PCOD/PCOS & Hormonal Balance</li>
          <li>Irregular Periods & Fertility Support</li>
          <li>Thyroid Wellness</li>
          <li>Back Pain & Posture Correction</li>
        </ul>
        <p>
          Our certified trainer brings compassion and evidence-based methods to help women overcome unique health challenges and thrive.
        </p>
      </div>
    </section>
  );
}

export default About;
