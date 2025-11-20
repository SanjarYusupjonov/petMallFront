import React from 'react';
import './Petcards.css';

export default function PetCard({ pet, onClick }) {
  return (
    <div className="pet-card" onClick={() => onClick(pet)} role="button" tabIndex={0}>
      <div className="pet-image-wrap">
        <img src={pet.photoUrl} alt={pet.name} className="pet-image" />
        <div className="pet-overlay">
          <div className="pet-name">{pet.name}</div>
        </div>
      </div>
      <div className="pet-meta">
        <div className="pet-type">{pet.type} • {pet.age}</div>
      </div>
    </div>
  );
}
