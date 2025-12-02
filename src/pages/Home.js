import React from 'react';
import PetCard from '../components/Petcards';
import '../components/Petcards.css';
import './Home.css';

const RECOMMENDED = [];

export default function Home() {
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
          <h2>About Us</h2>
          <p>Welcome to PetCare, a platform created with love and dedication by five passionate students — <strong>Doniyor, Sanjar, Alisher, Shohruh, and Asadbek</strong>.</p>
          
          <h3>Our Mission</h3>
          <p>Our mission is simple: to connect homeless pets with caring people, and to make shelter management easier, faster, and more organized.</p>
          
          <h3>We Believe Every Animal Deserves:</h3>
          <ul>
            <li>A safe home</li>
            <li>A loving family</li>
            <li>Proper care and attention</li>
          </ul>

          <h2>Contact Us</h2>
          <p>Have questions, suggestions, or want to get involved? We'd love to hear from you!</p>
          
          <div className="contact-row">
            <div>
              <strong>📧 Email</strong>
              <div>petcare@newuu.uz</div>
            </div>
            <div>
              <strong>📱 Phone</strong>
              <div>+998 77 777 77 77</div>
            </div>
          </div>

          <p style={{ marginTop: '1.5rem', color: '#666' }}>
            Whether you're a shelter, a future pet owner, or someone who simply loves animals, feel free to reach out anytime. We're here to help!
          </p>
        </div>
      </section>
    </>
  );
}
