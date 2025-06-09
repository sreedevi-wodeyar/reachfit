import React from 'react';
import './NutritionDiet.css';

function Diet() {
  return (
    <section className="diet-main">
      <div className="container">
        <div className="diet-hero">
          <h1 className="diet-title">Diet Plans & Coaching</h1>
          <p className="diet-subtitle">Find the perfect diet for your body, goals, and lifestyle. No fads, just results.</p>
        </div>
        <div className="diet-sections">
          <section className="diet-section">
            <h2>Our Approach</h2>
            <ul>
              <li>Science-backed, sustainable diets (no starvation!)</li>
              <li>Flexible meal options for busy lifestyles</li>
              <li>Weekly progress reviews and adjustments</li>
              <li>Support for medical conditions (PCOS, diabetes, thyroid, etc.)</li>
            </ul>
          </section>
          <section className="diet-section">
            <h2>Types of Diets We Offer</h2>
            <div className="diet-types-grid">
              <div>
                <strong>Balanced Indian Diet</strong>
                <p>Traditional, home-style meals with a healthy twist. Portion control and mindful eating.</p>
              </div>
              <div>
                <strong>Low-Carb & Keto</strong>
                <p>For rapid fat loss and improved energy. Vegetarian and non-veg options.</p>
              </div>
              <div>
                <strong>Intermittent Fasting</strong>
                <p>Flexible fasting windows, easy to follow, great for weight management.</p>
              </div>
              <div>
                <strong>High-Protein & Muscle Gain</strong>
                <p>Build lean muscle, recover faster, and stay full longer.</p>
              </div>
            </div>
          </section>
          <section className="diet-section">
            <h2>Diet Success Stories</h2>
            <div className="diet-success-stories">
              <div className="diet-success-card">“Lost 12kg in 5 months, cholesterol down, energy up!”<span>- Anjali, 39</span></div>
              <div className="diet-success-card">“PCOD symptoms reduced, skin cleared, and I love my meals!”<span>- Nithya, 26</span></div>
              <div className="diet-success-card">“Gained 5kg muscle, no more fatigue, and my diet is delicious.”<span>- Ramesh, 32</span></div>
            </div>
          </section>
          <section className="diet-section diet-cta">
            <a href="/contact" className="diet-cta-btn">Start Your Diet Journey</a>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Diet;
