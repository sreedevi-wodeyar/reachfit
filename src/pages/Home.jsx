import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import profilePhoto from '../assets/Profile Photo.jpeg';
import certificate from '../assets/Certificate.jpeg';
import trainerVideo from '../assets/Trainer Video.mp4'; // Local video file

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
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow p-4 mb-2 max-w-xl text-center">
        <p className="text-lg italic text-gray-700">{homeTestimonials[index].message}</p>
        <span className="block mt-2 text-sm text-purple-700 font-semibold">{homeTestimonials[index].author}</span>
      </div>
      <div className="flex space-x-2 mt-2">
        {homeTestimonials.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-purple-600' : 'bg-gray-300'}`}></span>
        ))}
      </div>
    </div>
  );
}

function Home() {
  const videoUrl = trainerVideo; // Change this to a string URL for YouTube, Facebook, or Instagram

  return (
    <section className="flex flex-col items-center w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      {/* Hero Section - only text */}
      <div className="w-full max-w-4xl flex flex-col items-start justify-center px-4 md:px-8 py-10 md:py-16 bg-white/90 rounded-3xl shadow-2xl mt-10 mb-6 border border-purple-100 relative overflow-hidden">
        <h2 className="text-xl md:text-2xl font-semibold text-purple-700 mb-1">Your destination to fitness</h2>
        <h2 className="text-lg md:text-xl font-medium text-gray-700 mb-2">Unleash Your Best Self</h2>
        <p className="text-base md:text-lg text-gray-600 font-medium mb-2">
          Get Toned Up like in your 20s…<br />
          Get Ready to Shape-up to the best version of yourself<br />
          Get Stronger and Healthier Inside Out<br />
          Everything At the convenience of your homes!
        </p>
      </div>
      {/* Certificate Section - show at 100% natural size */}
      <div className="w-full max-w-4xl flex flex-col items-center px-4 md:px-8 py-6 mb-6">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">Trainer Certification</h3>
        <img src={certificate} alt="Certificate" className="max-w-full h-auto object-scale-down rounded border border-blue-200 shadow bg-white" style={{maxWidth: '100%', height: 'auto'}} />
        <span className="text-xs text-gray-500 mt-1 font-semibold text-center">Certified Women's Fitness Coach</span>
      </div>
      {/* Trainer Photo Section */}
      <div className="w-full max-w-4xl flex flex-col items-center px-4 md:px-8 py-6 mb-6">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">Meet Your Trainer</h3>
        <img src={profilePhoto} alt="Profile" className="w-32 h-32 object-cover rounded-full border-2 border-white shadow ring ring-purple-200 bg-gray-100" />
      </div>
      {/* Benefits Section - comes after hero */}
      <div className="w-full max-w-7xl px-4 md:px-8 py-6">
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 shadow-inner">
          <h3 className="font-bold text-blue-800 mb-2 text-lg md:text-xl">Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base grid grid-cols-2 gap-x-4 gap-y-1">
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
      </div>

      {/* Video Section */}
      <div className="w-full max-w-3xl px-4 py-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Featured Video</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-100">
          <ReactPlayer url={videoUrl} width="100%" height="100%" controls={true} />
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="w-full max-w-5xl px-4 py-10">
        <h2 className="text-3xl font-bold text-purple-800 mb-4 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Add your own gallery images here, e.g.:
          <img src={require('../assets/gallery1.jpg')} alt="Gallery 1" className="w-full h-44 object-cover rounded-xl shadow-lg border-2 border-purple-100 hover:scale-105 transition-all" />
          <img src={require('../assets/gallery2.jpg')} alt="Gallery 2" className="w-full h-44 object-cover rounded-xl shadow-lg border-2 border-blue-100 hover:scale-105 transition-all" />
          */}
          <div className="flex items-center justify-center w-full h-44 bg-purple-50 rounded-xl border-2 border-dashed border-purple-200 text-purple-400 font-semibold text-lg col-span-2 md:col-span-4">
            Add your best class, client, or event photos here!
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full max-w-3xl px-4 py-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">What Our Clients Say</h2>
        <TestimonialSlider />
      </div>

      {/* Call-to-action Banner */}
      <div className="w-full bg-gradient-to-r from-purple-500 to-blue-600 py-10 flex flex-col items-center mt-10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow">Ready to Transform?</h2>
        <Link to="/contact" className="px-10 py-4 bg-white text-purple-700 font-bold rounded-xl shadow-lg hover:bg-purple-100 transition-all text-lg">Book a Free Consultation and Free Demo</Link>
      </div>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919243454366"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-3 flex items-center justify-center transition-colors"
        title="Chat with Trainer on WhatsApp"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
          alt="WhatsApp"
          width="32"
          height="32"
          style={{ filter: 'invert(1)' }}
        />
      </a>
    </section>
  );
}

export default Home;
