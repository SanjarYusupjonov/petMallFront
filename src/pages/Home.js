import React from 'react';
import PetCard from '../components/Petcards';
import '../components/Petcards.css';
import './Home.css';

// Removed recommended placeholders per user request — keep array empty so no hero cards render
const RECOMMENDED = [];

// const AVAILABLE = [];

export default function Home() {
  // Static hero — replaced animated SVG with a clear photo of a cute dog.

  // Framed inline video removed per request (cute.mp4)

  return (
    <>
      <div className="home-hero">
        <div className="hero-inner">
          <div className="hero-left">
            <h1>Where Pets Find Their People</h1>
            <p className="hero-sub">Thousands of adoptable pets are looking for people. People like you.</p>

            <div id="recommended-section" className="recommended">
              <h3>Recommended</h3>
              <div className="rec-grid">
                {RECOMMENDED.map(p => (
                  <PetCard key={p.id} pet={{...p, breed:'', sex:'', size:'', status:'Available', description:''}} onClick={()=>{}} />
                ))}
              </div>
            </div>
          </div>

          {/* right column intentionally left empty after removing framed video */}
        </div>

        <video className="home-video" autoPlay muted loop playsInline poster="/hero-poster.jpg">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <section className="how-it-works">
        <div className="container">
          <h2>How it works</h2>
          <div className="how-grid">
            <div className="how-step">
              <div className="num">1</div>
              <h4>Find a pet</h4>
              <p>Search or browse recommended pets and pick one you love.</p>
            </div>
            <div className="how-step">
              <div className="num">2</div>
              <h4>Contact the shelter</h4>
              <p>Use the contact form to ask questions or schedule a visit.</p>
            </div>
            <div className="how-step">
              <div className="num">3</div>
              <h4>Bring them home</h4>
              <p>Complete adoption steps with the shelter and welcome a new friend.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <div className="container">
          <h2>About & Contact</h2>
          <p>PetMall is a community-driven platform working with local shelters to help pets find homes. Reach out to volunteer or help.</p>
          <div className="contact-row">
            <div>
              <strong>Email</strong>
              <div>hello@petmall.example</div>
            </div>
            <div>
              <strong>Address</strong>
              <div>123 Pet Lane, Animal City</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
