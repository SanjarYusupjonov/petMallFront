import React, { useMemo, useState } from 'react';
import PetCard from '../components/Petcards';
import '../components/Petcards.css';
import './PetList.css';
import PetDetailModal from '../components/PetDetailModal';

const SAMPLE_PETS = [
  {
    id: '1',
    name: 'Moose',
    type: 'Dog',
    age: '2 yrs',
    breed: 'Labrador',
    sex: 'Male',
    size: 'Large',
    status: 'Available',
    photoUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    description: 'Friendly and playful. Loves people and walks.'
  },
  {
    id: '2',
    name: 'Luna',
    type: 'Cat',
    age: '1 yr',
    breed: 'Mixed',
    sex: 'Female',
    size: 'Small',
    status: 'Available',
    photoUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    description: 'Curious kitten that enjoys climbing and naps.'
  },
  {
    id: '3',
    name: 'Bella',
    type: 'Dog',
    age: '3 yrs',
    breed: 'Beagle',
    sex: 'Female',
    size: 'Medium',
    status: 'Adopted',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    description: 'Sweet dog good with kids.'
  },
  {
    id: '4',
    name: 'Misty',
    type: 'Horse',
    age: '5 yrs',
    breed: 'Mustang',
    sex: 'Female',
    size: 'Large',
    status: 'Available',
    photoUrl: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    description: 'Calm and gentle, perfect for light trails.'
  },
  {
    id: '5',
    name: 'Peanut',
    type: 'Dog',
    age: '6 months',
    breed: 'Mixed',
    sex: 'Male',
    size: 'Small',
    status: 'Available',
    photoUrl: 'https://images.unsplash.com/photo-1517976487492-6b6ad6a6d5d6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    description: 'Puppy full of energy and love.'
  }
];

export default function PetList() {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [sortBy, setSortBy] = useState('Latest');
  const [selected, setSelected] = useState(null);

  const pets = useMemo(() => SAMPLE_PETS, []);

  const filtered = useMemo(() => {
    let list = pets.slice();
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || (p.description||'').toLowerCase().includes(q));
    }
    if (filterType !== 'All') {
      list = list.filter(p => p.type === filterType);
    }
    if (sortBy === 'Name') list.sort((a,b)=>a.name.localeCompare(b.name));
    return list;
  }, [pets, query, filterType, sortBy]);

  return (
    <div className="pet-list-page">
      <div className="search-bar">
        <div className="search-left">
          <input placeholder="Search pets, e.g. 'Luna'" value={query} onChange={e=>setQuery(e.target.value)} />
          <select value={filterType} onChange={e=>setFilterType(e.target.value)}>
            <option>All</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Horse</option>
          </select>
        </div>
        <div className="search-right">
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value="Latest">Sort By: Latest</option>
            <option value="Name">Sort By: Name</option>
          </select>
        </div>
      </div>

      <div className="cards-grid">
        {filtered.map(p => (
          <PetCard key={p.id} pet={p} onClick={setSelected} />
        ))}
      </div>

      {selected && <PetDetailModal pet={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
