import React, { useState } from 'react';

// Store feedbacks in localStorage for persistence
function saveFeedback(feedback) {
  const stored = JSON.parse(localStorage.getItem('rf_feedbacks') || '[]');
  stored.unshift(feedback); // add to top
  localStorage.setItem('rf_feedbacks', JSON.stringify(stored.slice(0, 50)));
}

function loadFeedbacks() {
  return JSON.parse(localStorage.getItem('rf_feedbacks') || '[]');
}

function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', feedback: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  // Add simple math CAPTCHA
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: '' });
  const [captchaError, setCaptchaError] = useState('');
  // Feedbacks state
  const [feedbacks, setFeedbacks] = useState([]);

  React.useEffect(() => {
    setCaptcha({ a: Math.floor(Math.random() * 10) + 1, b: Math.floor(Math.random() * 10) + 1, answer: '' });
    setFeedbacks(loadFeedbacks());
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleCaptchaChange = e => setCaptcha({ ...captcha, answer: e.target.value });

  const validate = () => {
    if (!form.name || !form.email || !form.feedback) {
      setStatus('Please fill in all fields.');
      return false;
    }
    if (parseInt(captcha.answer, 10) !== captcha.a + captcha.b) {
      setCaptchaError('Incorrect answer to the anti-spam question.');
      return false;
    } else {
      setCaptchaError('');
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      // Save feedback (do not store email)
      saveFeedback({ name: form.name, feedback: form.feedback, date: new Date().toISOString() });
      setStatus('Thank you for your feedback!');
      setLoading(false);
      setForm({ name: '', email: '', feedback: '' });
      setCaptcha({ a: Math.floor(Math.random() * 10) + 1, b: Math.floor(Math.random() * 10) + 1, answer: '' });
      setFeedbacks(loadFeedbacks()); // Update feedbacks list
    }, 1200);
  };

  return (
    <section className="page feedback-page">
      <h1>Feedback</h1>
      <p>We value your feedback! Please fill out the form below to share your experience with ReachFit.</p>
      <form className="feedback-form" onSubmit={handleSubmit} autoComplete="off">
        <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="feedback" placeholder="Your Feedback" value={form.feedback} onChange={handleChange} required />
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
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Feedback'}</button>
        {status && <div className="form-status">{status}</div>}
      </form>
      {/* Display all feedbacks below the form */}
      <div className="feedbacks-list" style={{ marginTop: '2.5rem' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#ff512f', marginBottom: '1rem' }}>Recent Feedback</h2>
        {feedbacks.length === 0 && <div style={{ color: '#888' }}>No feedback submitted yet.</div>}
        {feedbacks.map((fb, idx) => (
          <div key={idx} className="testimonial-card" style={{ marginBottom: '1.2rem', background: 'linear-gradient(120deg, #fffbe6 0%, #f9d423 100%)', color: '#ff512f' }}>
            <div className="testimonial-quote" style={{ fontStyle: 'italic', fontSize: '1.08rem' }}>
              "{fb.feedback}"
            </div>
            <div className="testimonial-author" style={{ fontWeight: 600, fontSize: '1rem', marginTop: '0.5rem' }}>
              — {fb.name} <span style={{ color: '#888', fontWeight: 400, fontSize: '0.95rem' }}>({new Date(fb.date).toLocaleString()})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;
