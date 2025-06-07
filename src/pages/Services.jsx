import React, { useState } from 'react';

// List of services with details and icons
const services = [
  {
    icon: '💪',
    title: 'Personal Training',
    desc: 'One-on-one coaching tailored to your goals, fitness level, and schedule.'
  },
  {
    icon: '🤸‍♂️',
    title: 'Group Classes',
    desc: 'Fun, energetic group workouts for all levels—motivation and community included!'
  },
  {
    icon: '🥗',
    title: 'Nutrition Guidance',
    desc: 'Custom meal plans and expert advice to fuel your transformation.'
  },
  {
    icon: '🧘‍♀️',
    title: 'Yoga & Flexibility',
    desc: 'Improve flexibility, balance, and mental wellness with guided yoga sessions.'
  },
  {
    icon: '🌐',
    title: 'Online Coaching',
    desc: 'Train from anywhere with live online classes and progress tracking.'
  },
  {
    icon: '🔥',
    title: 'Transformation Programs',
    desc: 'Structured plans for weight loss, muscle gain, or lifestyle change.'
  },
];

// FAQ accordion
const faqs = [
  {
    q: 'Do I need equipment for online coaching?',
    a: 'No, we design workouts based on what you have available—even bodyweight only!'
  },
  {
    q: 'Are group classes suitable for beginners?',
    a: 'Absolutely! All levels are welcome and modifications are provided.'
  },
  {
    q: 'Can I get a custom meal plan?',
    a: 'Yes, nutrition guidance and meal plans are included in most programs.'
  },
  {
    q: 'How do I track my progress?',
    a: 'We use regular check-ins, progress photos, and fitness assessments.'
  },
];

// Timeline/achievements for ReachFit
const timeline = [
  { year: '2017', event: 'Certified Personal Trainer (ACE)' },
  { year: '2025', event: 'Started ReachFit' },
  { year: '2025', event: 'Certified Nutrition Coach' },
  { year: '2017', event: 'Yoga Instructor Certification' },
  { year: '2025', event: '100+ Happy Clients' },
];

// Skill stats
const skills = [
  { label: 'Coaching', percent: 95 },
  { label: 'Nutrition', percent: 90 },
  { label: 'Motivation', percent: 98 },
  { label: 'Yoga', percent: 85 },
];

// Fun facts
const facts = [
  'ReachFit clients have obtained a lot of benefits!',
  'We offer online coaching worldwide.',
  'Our community events are open to all fitness levels.'
];

// Services page for ReachFit: lists all available fitness and wellness services
function Services() {
  const [open, setOpen] = useState(null);
  return (
    <section className="page services-section">
      {/* Main heading (short) */}
      <h1>ReachFit Services</h1>
      {/* Timeline/achievements squares */}
      <div className="services-timeline-grid">
        {timeline.map((item, idx) => (
          <div className="services-timeline-card" key={idx}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-event">{item.event}</div>
          </div>
        ))}
      </div>
      {/* Skill squares */}
      <div className="services-skills-grid">
        {skills.map((s, idx) => (
          <div className="services-skill-card" key={idx}>
            <div className="skill-label">{s.label}</div>
            <div className="skill-percent">{s.percent}%</div>
          </div>
        ))}
      </div>
      {/* Fun facts squares */}
      <div className="services-facts-grid">
        {facts.map((fact, idx) => (
          <div className="services-fact-card" key={idx}>{fact}</div>
        ))}
      </div>
      {/* Services page intro */}
      <p className="services-desc">
        ReachFit specializes in women's health and wellness, offering tailored programs for:
        <strong> Fibroids, Diastasis Recti, PCOD/PCOS, Irregular Periods, Hormonal Imbalance, Fertility, Thyroid, Back Pain, and Posture Correction.</strong>
      </p>
      {/* Women's Health Services Section */}
      <div className="services-womens-health">
        <h2>Women's Health Programs</h2>
        <div className="service-benefits-list" style={{ marginTop: '0', paddingTop: '0' }}>
          Personalized fitness for hormonal balance and reproductive health<br />
          Safe postnatal and Diastasis Recti recovery<br />
          PCOD/PCOS management through exercise and nutrition<br />
          Support for irregular periods, fertility, and thyroid wellness<br />
          Back pain relief and posture correction
        </div>
        <p>
          Every program is designed with compassion and expertise to help women overcome unique health challenges and achieve lasting results.
        </p>
      </div>
      {/* Interactive service cards */}
      <div className="services-cards">
        {services.map((s, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      {/* FAQ accordion */}
      <div className="services-faq">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, idx) => (
          <div className="faq-item" key={idx}>
            <button className="faq-question" onClick={() => setOpen(open === idx ? null : idx)}>
              {faq.q}
              <span className="faq-arrow">{open === idx ? '▲' : '▼'}</span>
            </button>
            {open === idx && <div className="faq-answer">{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
