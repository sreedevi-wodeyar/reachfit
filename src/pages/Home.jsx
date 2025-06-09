import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import trainer1 from '../assets/trainer1.jpeg';

// Home page testimonials to display in the slider
const homeTestimonials = [
  {
    message: '“ReachFit helped me lose inches off my belly so soon. The support and motivation are unmatched!”',
    author: '— Krupa.'
  },
    {
    message: '“Backpain relief has been incredible. I can finally move without discomfort!”',
    author: '— Veena.'
  },
    {
    message: '“Menstrual cycle started regularizing once I started my workouts with Reachfit. Recommend this to all ladies facing irregular periods”',
    author: '— Sahana.'
  },
  {
    message: '“The group classes are so effective and relaxing. I love the energy and the results!”',
    author: '— Nithu.'
  },
  {
    message: '“Finally started loosing weight in the pre-menopausal age from the very 1st month of joining. Highly recommend!”',
    author: '— Deepti.'
  }
];

// TestimonialSlider component: cycles through testimonials with a simple animation
function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % homeTestimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="home-testimonial-slider">
      <div className="testimonial-card">
        <p>{homeTestimonials[index].message}</p>
        <span className="testimonial-author">{homeTestimonials[index].author}</span>
      </div>
      <div className="slider-dots">
        {homeTestimonials.map((_, i) => (
          <span key={i} className={i === index ? 'dot active' : 'dot'}></span>
        ))}
      </div>
    </div>
  );
}

// Contact form (inline, animated, validated)
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStatus('Thank you! We will contact you soon.');
      setLoading(false);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };
  return (
    <form className="home-contact-form" onSubmit={handleSubmit} autoComplete="off">
      <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
      <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
      {status && <div className="form-status">{status}</div>}
    </form>
  );
}

function Home() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <section className="page home fancy-home">
      {/* Hero section with layered gradients, animated shapes, and parallax */}
      <div className="home-hero home-hero-bg">
        <div className="container">
          <div className="hero-gradient" />
          <div className="hero-shapes">
            <span className="shape shape1" />
            <span className="shape shape2" />
            <span className="shape shape3" />
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            {/* Trainer photo between center top and right top of hero section */}
            <div className="trainer-photo-col" style={{ position: 'absolute', left: '80%', top: '-2.5rem', transform: 'translateX(-50%)', zIndex: 2 }}>
              <div className="home-hero-photo-box">
                <img src={trainer1} alt="ReachFit Trainer, certified women's fitness coach" className="home-hero-photo-img" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '100%' }}>
              <div className="home-hero-text" style={{ alignItems: 'flex-start', marginTop: '-1.2rem', marginLeft: '1.5rem', flex: 1 }}>
                <h1 className="home-title">ReachFit</h1>
                <h2 className="home-midtagline">Your destination to fitness</h2>
                <h2 className="home-tagline">Unleash Your Best Self</h2>
                <p className="home-desc" style={{ marginTop: '0.2rem' }}>
                  Get Toned Up like in your 20s…
                  <br />Get Ready to Shape-up to the best version of yourself
                  <br />Get Stronger and Healthier Inside Out
                  <br />Everything At the convenience of your homes!"
                </p>
                {/* Benefits moved into Hero Section */}
                <div className="home-benefits-section hero-benefits" style={{ marginTop: '-1.2rem' }}>
                  <h3 className="benefits-title" style={{ marginBottom: '0.1rem' }}>Benefits</h3>
                  <ul className="benefits-list" style={{ marginTop: '0', paddingTop: '0' }}>
                    <li>Slim Your Waist</li>
                    <li>Shrink Uterus and Breast Fibroids</li>
                    <li>Heal Endometriosis</li>
                    <li>Heal Diastasis Recti</li>
                    <li>Heal PCOD/PCOS</li>
                    <li>Regularise the Irregular Periods</li>
                    <li>Heal Hormonal Imbalance</li>
                    <li>Improve Fertility</li>
                    <li>Heal Thyroid issues</li>
                    <li>Heal Back Pain</li>
                    <li>Correct the Lumbar Spine Posture Issues</li>
                    <li>Ease Perimenopausal and Premenopausal symptoms</li>
                  </ul>
                </div>
                <div style={{ height: '1.2rem' }} />
                <Link to="/contact" className="home-cta-btn blinker" style={{ marginTop: '-0.8rem', display: 'inline-block' }}>Get Started</Link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Animated scroller for services offered (infinite, smooth) */}
      <div className="home-scroller">
        <div className="container">
          <div className="scroller-track">
            {[...Array(2)].flatMap((_, i) => [
              <span key={`pt${i}`}>Personal Training</span>,
              <span key={`gc${i}`}>Group Classes</span>,
              <span key={`gc${i}`}>Pranayama for various health issues</span>,
              <span key={`np${i}`}>Nutrition Plans</span>,
              <span key={`yf${i}`}>Yoga & Flexibility</span>,
              <span key={`swl${i}`}>Sustainable Weight Loss</span>,
              <span key={`bm${i}`}>Build Muscle</span>,
              <span key={`fl${i}`}>Fat Loss</span>,
              <span key={`bwi${i}`}>Bone Weight Improvement</span>,
              <span key={`oc${i}`}>Online Coaching</span>,
            ])}
          </div>
        </div>
      </div>
      {/* Feature cards for main services (glassmorphic, animated, responsive grid, side by side, smaller) */}
      <div className="home-features features-grid">
        <div className="container">
          <div className="feature-card feature-animate">
            <span className="feature-icon" role="img" aria-label="Personal Training">💪</span>
            <h3>Personal Training</h3>
            <p>One-on-one sessions tailored to your goals, fitness level, and schedule.</p>
          </div>
          <div className="feature-card feature-animate">
            <span className="feature-icon" role="img" aria-label="Nutrition">🥗</span>
            <h3>Nutrition Guidance</h3>
            <p>Custom meal plans and expert advice to fuel your transformation.</p>
          </div>
          <div className="feature-card feature-animate">
            <span className="feature-icon" role="img" aria-label="Yoga">🧘‍♂️</span>
            <h3>Yoga & Flexibility</h3>
            <p>Improve flexibility, balance, and mental wellness with guided yoga sessions.</p>
          </div>
          <div className="feature-card feature-animate">
            <span className="feature-icon" role="img" aria-label="Online Coaching">🌐</span>
            <h3>Online Coaching</h3>
            <p>Train from anywhere with live online classes and progress tracking.</p>
          </div>
        </div>
      </div>
      {/* Why Choose ReachFit section */}
      <div className="home-why">
        <div className="container">
          <h2>Why Choose <span className="rf-highlight">ReachFit</span>?</h2>
          <div className="why-list">
            <div className="why-item"><span className="why-icon">✅</span> Certified & Experienced Trainer</div>
            <div className="why-item"><span className="why-icon">✅</span> 100% Personalized Plans</div>
            <div className="why-item"><span className="why-icon">✅</span> Real Results & Transformations</div>
            <div className="why-item"><span className="why-icon">✅</span> Supportive Community</div>
            <div className="why-item"><span className="why-icon">✅</span> Flexible Online/Offline Options</div>
          </div>
        </div>
      </div>
      {/* Testimonials slider section */}
      <div className="home-testimonials-section merged-with-hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <TestimonialSlider />
          <Link to="/feedback" className="see-more-link">See more & leave your feedback</Link>
        </div>
      </div>
      {/* Home Convenience Section */}
      <div className="home-convenience">
        <div className="container">
          <p className="home-convenience-text">Get toned up at the convenience of your HOMES.</p>
        </div>
      </div>
      {/* Call-to-action banner at the bottom */}
      <div className="home-banner" id="get-started">
        <div className="container">
          <h2>Ready to Transform?</h2>
          <Link to="/contact" className="home-banner-btn">Book a Free Consultation and Free Demo</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
