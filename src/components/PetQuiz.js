import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './PetQuiz.css';

export default function PetQuiz({ onClose }) {
  const [answers, setAnswers] = useState({
    activity: '',
    time: '',
    home: '',
    budget: '',
    others: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (k, v) => setAnswers(a => ({ ...a, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(process.env.PUBLIC_URL + '/pets.json');
      const pets = await res.json();
      const pick = pets[Math.floor(Math.random() * pets.length)];

      try {
        const rec = { id: Date.now(), pet: pick, answers, ts: new Date().toISOString() };
        const prev = JSON.parse(localStorage.getItem('pet_quiz_records') || '[]');
        prev.push(rec);
        localStorage.setItem('pet_quiz_records', JSON.stringify(prev));
      } catch (e) {}

      setResult(pick);
    } catch (err) {
      console.error(err);
      alert('Failed to load pets.');
    }
    setLoading(false);
  };

  const closeAndReset = () => {
    setResult(null);
    onClose && onClose();
  };

  return typeof document !== 'undefined' ? ReactDOM.createPortal(
    <div className="quiz-overlay" onClick={closeAndReset}>
      <div className="quiz-modal" onClick={e => e.stopPropagation()}>
        {!result ? (
          <form className="quiz-form" onSubmit={submit}>
            <h3>Pet Personality Quiz</h3>
            <label>How active are you on a daily basis?
              <select required value={answers.activity} onChange={e => handleChange('activity', e.target.value)}>
                <option value="">Choose...</option>
                <option value="low">Low (relaxed)</option>
                <option value="medium">Medium (regular walks)</option>
                <option value="high">High (outdoors, running)</option>
              </select>
            </label>

            <label>How much time can you spend with a pet each day?
              <select required value={answers.time} onChange={e => handleChange('time', e.target.value)}>
                <option value="">Choose...</option>
                <option value="<2">Less than 2 hours</option>
                <option value="2-4">2–4 hours</option>
                <option value=">4">More than 4 hours</option>
              </select>
            </label>

            <label>What type of home do you live in?
              <select required value={answers.home} onChange={e => handleChange('home', e.target.value)}>
                <option value="">Choose...</option>
                <option value="apartment">Apartment</option>
                <option value="house">House with yard</option>
                <option value="farm">Farm / large property</option>
              </select>
            </label>

            <label>What’s your budget for pet care?
              <select required value={answers.budget} onChange={e => handleChange('budget', e.target.value)}>
                <option value="">Choose...</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>

            <label>Do you have children or other pets?
              <select required value={answers.others} onChange={e => handleChange('others', e.target.value)}>
                <option value="">Choose...</option>
                <option value="none">No</option>
                <option value="children">Children</option>
                <option value="otherpets">Other pets</option>
              </select>
            </label>

            <div className="quiz-actions">
              <button type="button" className="btn ghost" onClick={closeAndReset}>Cancel</button>
              <button type="submit" className="btn primary" disabled={loading}>{loading ? 'Loading...' : 'Submit'}</button>
            </div>
          </form>
        ) : (
          <div className="quiz-result">
            <div className="fire-animation" aria-hidden="true">
              <div className="flame" />
              <div className="flame mid" />
              <div className="flame small" />
            </div>
            <h3>Congratulations!</h3>
            <p>Based on your answers, meet <strong>{result.name}</strong> — a {result.age} {result.type}.</p>
            <img src={result.photoUrl} alt={result.name} />
            <p className="lead">{result.description}</p>
            <p>He loves you already ❤️</p>
            <div className="quiz-actions">
              <button className="btn ghost" onClick={() => { setResult(null); }}>Try again</button>
              <button className="btn primary" onClick={closeAndReset}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  , document.body) : null;
}
