import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Home page testimonials to display in the slider
const homeTestimonials = [
  {
    message: '“ReachFit helped me lose 15kg and feel confident again. The support and motivation are unmatched!”',
    author: '— Priya S.'
  },
  {
    message: '“The group classes are so much fun and effective. I love the energy and the results!”',
    author: '— Rahul M.'
  },
  {
    message: '“Personalized nutrition and training plans made all the difference. Highly recommend!”',
    author: '— Sneha K.'
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
      <div className="home-hero home-hero-bg" style={{ marginTop: 0, paddingTop: 0 }}>
        {/* <div className="hero-bg-img" style={{ backgroundImage: `url(${ReachFitImg})` }} /> */}
        <div className="hero-gradient" />
        <div className="hero-shapes">
          <span className="shape shape1" />
          <span className="shape shape2" />
          <span className="shape shape3" />
        </div>
        <div className="home-hero-text">
          <h1 className="home-title">ReachFit</h1>
          <h2 className="home-midtagline">Your destination to fitness</h2>
          <h2 className="home-tagline">Unleash Your Best Self</h2>
          <p className="home-desc">
            Get Toned Up like in your 20s…
            <br />Get Ready to Shape-up to the best version of yourself
            <br />Get Stronger and Healthier Inside Out
            <br />Everything At the convenience of your homes!"
          </p>
          {/* Benefits moved into Hero Section */}
          <div className="home-benefits-section hero-benefits">
            <h3 className="benefits-title">Benefits</h3>
            <ul className="benefits-list">
              <li>Shrink Fibroids</li>
              <li>Heal Endometriosis</li>
              <li>Heal Diastasis Recti</li>
              <li>Heal PCOD/PCOS</li>
              <li>Regularise the Irregular Periods</li>
              <li>Heal Hormonal Imbalance</li>
              <li>Improve Fertility</li>
              <li>Heal Thyroid issues</li>
              <li>Back Pain</li>
              <li>Lumbar Spine Posture Issues</li>
              <li>Ease Perimenopausal and Premenopausal symptoms</li>
            </ul>
          </div>
          <Link to="/contact" className="home-cta-btn">Get Started</Link>
        </div>
      </div>
      {/* Animated scroller for services offered (infinite, smooth) */}
      <div className="home-scroller">
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
      {/* Feature cards for main services (glassmorphic, animated, responsive grid, side by side, smaller) */}
      <div className="home-features features-grid">
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
      {/* Why Choose ReachFit section */}
      <div className="home-why">
        <h2>Why Choose <span className="rf-highlight">ReachFit</span>?</h2>
        <div className="why-list">
          <div className="why-item"><span className="why-icon">✅</span> Certified & Experienced Trainer</div>
          <div className="why-item"><span className="why-icon">✅</span> 100% Personalized Plans</div>
          <div className="why-item"><span className="why-icon">✅</span> Real Results & Transformations</div>
          <div className="why-item"><span className="why-icon">✅</span> Supportive Community</div>
          <div className="why-item"><span className="why-icon">✅</span> Flexible Online/Offline Options</div>
        </div>
      </div>
      {/* Testimonials slider section */}
      <div className="home-testimonials-section merged-with-hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <TestimonialSlider />
        <a href="/feedback" className="see-more-link">See more & leave your feedback</a>
      </div>
      {/* Benefits Section */}
      {/* <div className="home-benefits-section">
        <h2 className="benefits-title">Benefits</h2>
        <ul className="benefits-list">
          <li>Shrink Uterus and Breast Fibroids</li>
          <li>Heal Endometriosis</li>
          <li>Heal Diastasis Recti</li>
          <li>Heal PCOD/PCOS</li>
          <li>Regularise the Irregular Periods</li>
          <li>Heal Hormonal Imbalance</li>
          <li>Improve Fertility</li>
          <li>Heal Thyroid issues</li>
          <li>Heal Back Pain</li>
          <li>Correct the lumbar spinal posture issues</li>
          <li>Ease Perimenopausal and Premenopausal symptoms</li>
        </ul>
      </div> */}
      {/* Home Convenience Section */}
      <div className="home-convenience">
        <p className="home-convenience-text">Get toned up at the convenience of your HOMES.</p>
      </div>
      {/* Call-to-action banner at the bottom */}
      <div className="home-banner" id="get-started">
        <h2>Ready to Transform?</h2>
        <a href="/contact" className="home-banner-btn">Book a Free Consultation</a>
      </div>
    </section>
  );
}

export default Home;
