import React from 'react';
import './NutritionDiet.css';

function Nutrition() {
  return (
    <section className="nutrition-main">
      <div className="container">
        <div className="nutrition-hero">
          <h1 className="nutrition-title">Nutrition Guidance</h1>
          <p className="nutrition-subtitle">Personalized nutrition for real results. Fuel your body, transform your life.</p>
        </div>
        <div className="nutrition-sections">
          <section className="nutrition-section">
            <h2>Why Nutrition Matters</h2>
            <ul>
              <li>Boosts energy, immunity, and mental clarity</li>
              <li>Supports weight loss, muscle gain, and hormonal balance</li>
              <li>Reduces risk of chronic diseases</li>
              <li>Improves skin, hair, and overall wellness</li>
            </ul>
          </section>
          <section className="nutrition-section">
            <h2>What We Offer</h2>
            <div className="nutrition-features-grid">
              <div>
                <strong>Custom Meal Plans</strong>
                <p>Designed for your goals, preferences, and lifestyle. Vegetarian, vegan, gluten-free, and more.</p>
              </div>
              <div>
                <strong>Macro & Calorie Tracking</strong>
                <p>Easy-to-follow plans with app-based tracking and regular check-ins.</p>
              </div>
              <div>
                <strong>Habit Coaching</strong>
                <p>Step-by-step habit building for sustainable change. No crash diets!</p>
              </div>
              <div>
                <strong>Supplement Guidance</strong>
                <p>Evidence-based advice on vitamins, minerals, and safe supplementation.</p>
              </div>
            </div>
          </section>
          <section className="nutrition-section">
            <h2>Popular Nutrition Programs</h2>
            <ul>
              <li>Fat Loss & Lean Muscle Nutrition</li>
              <li>PCOS/PCOD & Hormonal Balance Diets</li>
              <li>Sports & Performance Nutrition</li>
              <li>Postnatal & Women's Health Nutrition</li>
              <li>Diabetes & Thyroid Management</li>
            </ul>
          </section>
          <section className="nutrition-section nutrition-success-stories">
            <h2>Success Stories</h2>
            <div className="nutrition-success-card">“Lost 8kg in 3 months and reversed pre-diabetes!”<span>- Priya, 34</span></div>
            <div className="nutrition-success-card">“PCOS symptoms improved, periods regularized, and energy is back!”<span>- Sahana, 28</span></div>
            <div className="nutrition-success-card">“No more crash diets. I eat more and feel better than ever.”<span>- Rahul, 41</span></div>
          </section>
          <section className="nutrition-section nutrition-cta">
            <a href="/contact" className="nutrition-cta-btn">Get Your Personalized Plan</a>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Nutrition;
