import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

// Contact page for ReachFit: includes a contact form and social links
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', contact: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  // Math captcha state
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: '' });
  const [captchaError, setCaptchaError] = useState('');

  useEffect(() => {
    setCaptcha({ a: Math.floor(Math.random() * 10) + 1, b: Math.floor(Math.random() * 10) + 1, answer: '' });
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
    // EmailJS integration with provided IDs
    emailjs.send(
      'sreedevi.wodeyar', // Service ID
      'template_ge1bnrb', // Template ID
      {
        from_name: form.name,
        from_email: form.email,
        contact: form.contact,
        message: form.message,
      },
      'sAtMMCqabLuC1nekn' // User ID (public key)
    )
      .then(() => {
        setStatus('Your Response has been submitted and will revert back to you shortly.');
        setLoading(false);
        setForm({ name: '', email: '', contact: '', message: '' });
        setCaptcha({ a: Math.floor(Math.random() * 10) + 1, b: Math.floor(Math.random() * 10) + 1, answer: '' });
      })
      .catch(() => {
        setStatus('There was an error sending your message. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <section className="page contact-section">
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
        {status && (
          <div className="form-status" style={{ color: status.includes('error') ? '#ff512f' : '#22c55e', marginTop: '1rem', fontWeight: 500, textAlign: 'center', fontSize: '1.1em', background: '#f7f7fa', borderRadius: '0.5rem', padding: '0.75rem 1rem' }}>
            {status}
          </div>
        )}
      </form>
      {/* Social links for quick contact */}
      <div className="contact-links stylish-links">
        <a className="whatsapp" href="https://wa.me/919243454366" target="_blank" rel="noopener noreferrer">
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
