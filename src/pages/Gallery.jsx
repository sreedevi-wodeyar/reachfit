import React from 'react';

// Gallery images for the Gallery page (Unsplash, fitness themed, with categories)
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', alt: 'Cardio Session', caption: 'Cardio Burn', category: 'Cardio' },
  { src: 'https://images.unsplash.com/photo-1514512364185-4c2b67857b39', alt: 'Yoga Class', caption: 'Yoga Flow', category: 'Yoga' },
  { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', alt: 'Outdoor Bootcamp', caption: 'Bootcamp Fun', category: 'Group' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429', alt: 'Strength Training', caption: 'Strength Training', category: 'Strength' },
  { src: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c', alt: 'Group Fitness', caption: 'Group Fitness', category: 'Group' },
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', alt: 'Personal Coaching', caption: 'Personal Coaching', category: 'Personal' },
  { src: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c', alt: 'Outdoor Training', caption: 'Outdoor Training', category: 'Outdoor' },
  { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a', alt: 'HIIT', caption: 'HIIT Power', category: 'Cardio' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', alt: 'Fitness Motivation', caption: 'Motivation', category: 'Motivation' },
  { src: 'https://images.unsplash.com/photo-1461009312844-e80697a6a922', alt: 'Stretching', caption: 'Stretch & Recover', category: 'Yoga' },
];

// Animated stats for social proof
const stats = [
  { label: 'Happy Clients', value: 120 },
  { label: 'Sessions Delivered', value: 950 },
  { label: 'Years Experience', value: 8 },
  { label: 'Certifications', value: 5 },
];

// Client testimonials for the Gallery page
const defaultTestimonials = [
  {
    quote: 'ReachFit transformed my life! The trainers are so motivating and the community is amazing.',
    author: 'Priya S.'
  },
  {
    quote: 'I never thought I could enjoy working out this much. Every session is fun and challenging.',
    author: 'Rahul M.'
  },
  {
    quote: 'The best investment I made for my health. Highly recommend ReachFit!',
    author: 'Anjali K.'
  },
];

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

function getAllFeedbacks() {
  let feedbacks = [];
  try {
    feedbacks = JSON.parse(localStorage.getItem('rf_feedbacks') || '[]');
  } catch (e) { feedbacks = []; }
  // Only show positive feedbacks (simple filter: length > 10 chars)
  return feedbacks.filter(f => f.feedback && f.feedback.length > 10);
}

// Main Gallery page component
function Gallery() {
  const [filter, setFilter] = React.useState('All');
  const [lightbox, setLightbox] = React.useState(null);
  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  // Feedback rotation state
  const [feedbacks, setFeedbacks] = React.useState(() => getAllFeedbacks());
  const [rotateIdx, setRotateIdx] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRotateIdx(idx => (idx + 1) % Math.max(1, Math.ceil(feedbacks.length / 8)));
    }, 6000);
    // Listen for feedback changes (when user submits new feedback)
    const onStorage = () => setFeedbacks(getAllFeedbacks());
    window.addEventListener('storage', onStorage);
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', onStorage);
    };
  }, [feedbacks.length]);

  // Merge default testimonials and user feedbacks
  const allFeedbacks = [...feedbacks, ...defaultTestimonials];
  const top8 = allFeedbacks.slice(rotateIdx * 8, rotateIdx * 8 + 8);

  return (
    <section className="page gallery">
      {/* Page title and description (short title) */}
      <h1 className="gallery-title gradient-text">ReachFit Gallery</h1>
      <p className="gallery-desc">
        Explore our vibrant community and see real results from women overcoming Fibroids, Diastasis Recti, PCOD/PCOS, Irregular Periods, Hormonal Imbalance, Fertility, Thyroid, Back Pain, and Posture challenges. Every photo tells a story of dedication and transformation!
      </p>
      {/* Animated stats section */}
      <div className="gallery-stats">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <span className="stat-value">{stat.value}+</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      {/* Gallery filter buttons */}
      <div className="gallery-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`gallery-filter-btn${filter === cat ? ' active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Responsive gallery grid of images with captions and lightbox */}
      <div className="gallery-grid">
        {filteredImages.map((img, idx) => (
          <div className="gallery-card" key={idx} onClick={() => setLightbox(img)}>
            <div className="gallery-img-wrap">
              <img src={img.src} alt={img.alt} className="gallery-img" loading="lazy" />
            </div>
            <div className="gallery-caption">{img.caption}</div>
          </div>
        ))}
      </div>
      {/* Lightbox popup for image zoom */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery-lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <div className="gallery-lightbox-caption">{lightbox.caption}</div>
            <button className="gallery-lightbox-close" onClick={() => setLightbox(null)}>&times;</button>
          </div>
        </div>
      )}
      {/* Gallery Testimonials component */}
      <div className="gallery-testimonials-section">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonials-list">
          {homeTestimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-quote">{t.message}</p>
              <span className="testimonial-author">{t.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
