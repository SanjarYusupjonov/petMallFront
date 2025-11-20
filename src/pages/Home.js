import React from 'react';
import PetCard from '../components/Petcards';
import '../components/Petcards.css';
import './Home.css';

const RECOMMENDED = [
  { id: 'r1', name: 'Shay & Luna', type: 'Cat', age: '2 yrs', photoUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'r2', name: 'Moose', type: 'Dog', age: '2 yrs', photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'r3', name: 'Kittens', type: 'Cat', age: '6 mo', photoUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' }
];

const AVAILABLE = [
  { id: 'a1', name: 'Buddy', type: 'Dog', age: '1 yr', photoUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'a2', name: 'Lola', type: 'Dog', age: '3 yrs', photoUrl: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'a3', name: 'Max', type: 'Dog', age: '4 yrs', photoUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'a4', name: 'Bella', type: 'Cat', age: '2 yrs', photoUrl: 'https://images.unsplash.com/photo-1515548217212-8f3f11f7d0c9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'a5', name: 'Charlie', type: 'Dog', age: '6 mo', photoUrl: 'https://images.unsplash.com/photo-1501706362039-c6e8098a2b42?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'a6', name: 'Milo', type: 'Cat', age: '1 yr', photoUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'a7', name: 'Daisy', type: 'Dog', age: '5 yrs', photoUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'a8', name: 'Nala', type: 'Cat', age: '3 yrs', photoUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' }
];

export default function Home() {
  // Static hero — replaced animated SVG with a clear photo of a cute dog.

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

        <div className="hero-right">
          <div className="hero-scene">
            <img className="hero-image" src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1" alt="Cute dog" />
          </div>
        </div>
      </div>
  </div>

  {/* Additional content sections so page is longer and scrollable */}
    <section className="available">
      <div className="container">
        <h2>Available Pets</h2>
        <p className="lead">Browse more adoptable pets from our shelter. Click a card to view details.</p>
        <div className="available-grid">
          {AVAILABLE.map(p => (
            <PetCard key={p.id} pet={{...p, breed:'Unknown', sex:'', size:'Medium', status:'Available', description:''}} onClick={()=>{}} />
          ))}
        </div>
      </div>
    </section>

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

    <section className="featured">
      <div className="container">
        <h2>Featured</h2>
        <div className="featured-card">
          <img src="https://doughnutkitten.com/assets/images/dk-feature.jpg" alt="Doughnut Kitten" onError={(e)=>{ e.target.src='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1'}} />
          <div className="featured-body">
            <h3>Doughnut Kitten</h3>
            <p>Check out this adorable project — a playful site showcasing cute kittens and doughnuts. A fun, whimsical reference for pet lovers.</p>
            <a className="btn primary" href="http://doughnutkitten.com/" target="_blank" rel="noopener noreferrer">Visit doughnutkitten.com</a>
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
