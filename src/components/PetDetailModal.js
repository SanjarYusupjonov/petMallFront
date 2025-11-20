import React from 'react';
import './PetDetailModal.css';

export default function PetDetailModal({ pet, onClose }) {
  if (!pet) return null;

  return (
    <div className="pet-modal-overlay" onClick={onClose}>
      <div className="pet-modal" onClick={e => e.stopPropagation()}>
        <div className="pet-modal-left">
          <div className="map-placeholder">Map placeholder</div>
          <h2>{pet.name}</h2>
          <p className="lead">{pet.description}</p>

          <section>
            <h4>About</h4>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Age:</strong> {pet.age}</p>
            <p><strong>Sex:</strong> {pet.sex}</p>
            <p><strong>Size:</strong> {pet.size}</p>
          </section>
        </div>

        <aside className="pet-modal-right">
          <div className="bio-card">
            <img src={pet.photoUrl} alt={pet.name} />
            <div className="bio-list">
              <div><strong>Name</strong><span>{pet.name}</span></div>
              <div><strong>Status</strong><span>{pet.status}</span></div>
              <div><strong>Sex</strong><span>{pet.sex}</span></div>
              <div><strong>Age</strong><span>{pet.age}</span></div>
              <div><strong>Size</strong><span>{pet.size}</span></div>
            </div>
            <div className="modal-actions">
              <button className="btn ghost" onClick={onClose}>Close</button>
              <button className="btn primary">Contact Shelter</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
