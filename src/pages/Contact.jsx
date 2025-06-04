import React, { useState } from 'react';

// Contact page for ReachFit: includes a contact form and social links
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', contact: '', message: '' });
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [captchaError, setCaptchaError] = useState('');
  const [visitorInfo, setVisitorInfo] = useState(null);
  const [visitorError, setVisitorError] = useState('');

  React.useEffect(() => {
    // Generate simple math captcha
    setCaptcha({ a: Math.floor(Math.random() * 10) + 1, b: Math.floor(Math.random() * 10) + 1, answer: '' });
    // Fetch visitor info from ipapi.co
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setVisitorInfo({
          ip: data.ip,
          city: data.city,
          region: data.region,
          country: data.country_name,
          org: data.org,
        });
      })
      .catch(() => setVisitorError('Could not fetch visitor info.'));
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = 'Invalid email address';
    }
    if (!form.contact.trim()) {
      errs.contact = 'Contact number is required';
    } else if (!/^\d{10,15}$/.test(form.contact.trim())) {
      errs.contact = 'Enter a valid contact number';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    // Captcha validation
    if (parseInt(captcha.answer, 10) !== captcha.a + captcha.b) {
      setCaptchaError('Incorrect answer to the anti-spam question.');
      return false;
    } else {
      setCaptchaError('');
    }
    return Object.keys(errs).length === 0;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleCaptchaChange = e => setCaptcha({ ...captcha, answer: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Open user's email client with pre-filled mailto link
    const mailto = `mailto:sreedevi.wodeyar@gmail.com?subject=Contact%20from%20${encodeURIComponent(form.name)}&body=Name:%20${encodeURIComponent(form.name)}%0AEmail:%20${encodeURIComponent(form.email)}%0AContact:%20${encodeURIComponent(form.contact)}%0AMessage:%20${encodeURIComponent(form.message)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setStatus('Thank you! Your message has been prepared in your email client.');
      setLoading(false);
      setForm({ name: '', email: '', contact: '', message: '' });
      setCaptcha({ a: Math.floor(Math.random() * 10) + 1, b: Math.floor(Math.random() * 10) + 1, answer: '' });
    }, 1200);
  };

  return (
    <section className="page contact-section">
      {/* Visitor info section */}
      <div className="visitor-info" style={{ background: '#f7f7fa', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.5rem', fontSize: '0.98rem', color: '#444' }}>
        {visitorInfo ? (
          <>
            <strong>Your Location:</strong> {visitorInfo.city}, {visitorInfo.region}, {visitorInfo.country} <br />
            <strong>Your IP:</strong> {visitorInfo.ip} <br />
            <strong>Network:</strong> {visitorInfo.org}
          </>
        ) : visitorError ? (
          <span style={{ color: '#ff512f' }}>{visitorError}</span>
        ) : (
          <span>Detecting your location...</span>
        )}
      </div>
      {/* Main heading (short) */}
      <h1>Contact ReachFit</h1>
      {/* Subtitle */}
      <p className="contact-subtitle">
        Reach out for personalized women's health and fitness coaching. We specialize in helping women with Fibroids, Diastasis Recti, PCOD/PCOS, Irregular Periods, Hormonal Imbalance, Fertility, Thyroid, Back Pain, and Posture issues. Your journey to better health starts here!
      </p>
      {/* Animated, validated contact form */}
      <form className="contact-form styled-form" onSubmit={handleSubmit} autoComplete="off">
        {/* Input fields for name, email, and contact */}
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <div className="form-status" style={{ color: '#ff512f' }}>{errors.name}</div>}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <div className="form-status" style={{ color: '#ff512f' }}>{errors.email}</div>}
          <input
            type="tel"
            name="contact"
            placeholder="Your Contact Number"
            value={form.contact}
            onChange={handleChange}
            required
            className={errors.contact ? 'input-error' : ''}
          />
          {errors.contact && <div className="form-status" style={{ color: '#ff512f' }}>{errors.contact}</div>}
        </div>
        {/* Textarea for message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className={errors.message ? 'input-error' : ''}
          rows={5}
        />
        {errors.message && <div className="form-status" style={{ color: '#ff512f' }}>{errors.message}</div>}
        {/* Simple math CAPTCHA anti-spam */}
        <div className="captcha-group" style={{ margin: '1rem 0' }}>
          <label htmlFor="captcha-answer" style={{ fontWeight: 500 }}>
            Anti-spam: What is {captcha.a} + {captcha.b}?
          </label>
          <input
            id="captcha-answer"
            name="captcha-answer"
            type="number"
            placeholder="Enter answer"
            value={captcha.answer}
            onChange={handleCaptchaChange}
            required
            style={{ width: '120px', marginLeft: '1rem' }}
          />
          {captchaError && <div className="form-status" style={{ color: '#ff512f' }}>{captchaError}</div>}
        </div>
        {/* Submit button */}
        <button type="submit" className="gradient-btn" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {status && <div className="form-status">{status}</div>}
      </form>
      {/* Social links for quick contact */}
      <div className="contact-links stylish-links">
        <a className="whatsapp" href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" width="24" /> WhatsApp
        </a>
        <a className="instagram" href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" width="24" /> Instagram
        </a>
        <a className="facebook" href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" width="24" /> Facebook
        </a>
      </div>
      {/* Embedded Google Map (static image for privacy) */}
      <div className="contact-map">
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=Hyderabad,IN&zoom=12&size=600x200&key=YOUR_API_KEY" alt="Map" style={{ width: '100%', borderRadius: '1rem', marginTop: '1.5rem' }} />
      </div>
    </section>
  );
}

export default Contact;
