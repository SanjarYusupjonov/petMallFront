import React from 'react';
import PetCard from '../components/Petcards';
import '../components/Petcards.css';
import './Home.css';

const RECOMMENDED = [
  { id: 'r1', name: 'Shay & Luna', type: 'Cat', age: '2 yrs', photoUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'r2', name: 'Moose', type: 'Dog', age: '2 yrs', photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
  { id: 'r3', name: 'Kittens', type: 'Cat', age: '6 mo', photoUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' }
];

export default function Home() {
  return (
    <div className="home-hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1>Where Pets Find Their People</h1>
          <p className="hero-sub">Thousands of adoptable pets are looking for people. People like you.</p>

          <div className="recommended">
            <h3>Recommended</h3>
            <div className="rec-grid">
              {RECOMMENDED.map(p => (
                <PetCard key={p.id} pet={{...p, breed:'', sex:'', size:'', status:'Available', description:''}} onClick={()=>{}} />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src="https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1" alt="hero" />
        </div>
      </div>
    </div>
  );
}
