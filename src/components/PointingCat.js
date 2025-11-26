import React, { useState, useEffect } from 'react';
import './PointingCat.css';

export default function PointingCat({ targetLogin, targetSignup }) {
  const [isPointing, setIsPointing] = useState(true);
  const [pointingTarget, setPointingTarget] = useState('signup');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Toggle pointing direction every 3 seconds
    const interval = setInterval(() => {
      setPointingTarget(prev => prev === 'signup' ? 'login' : 'signup');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Track mouse position for interactive effect
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate direction based on mouse position
  const getCatRotation = () => {
    if (!targetLogin || !targetSignup) return 0;
    
    const loginRect = targetLogin.getBoundingClientRect();
    const signupRect = targetSignup.getBoundingClientRect();
    
    // Determine which button to point at
    const targetRect = pointingTarget === 'signup' ? signupRect : loginRect;
    
    const catX = window.innerWidth - 60;
    const catY = window.innerHeight / 2;
    
    const angle = Math.atan2(targetRect.top - catY, targetRect.left - catX) * (180 / Math.PI);
    
    return pointingTarget === 'signup' ? -20 : 20;
  };

  const handleCatClick = () => {
    setIsPointing(!isPointing);
  };

  return (
    <div className={`pointing-cat ${isPointing ? 'active' : ''} pointing-${pointingTarget}`}>
      <svg viewBox="0 0 100 100" className="cat-svg" onClick={handleCatClick}>
        {/* Cat Body */}
        <ellipse cx="50" cy="55" rx="25" ry="28" fill="#FF8C42" />
        
        {/* Cat Head */}
        <circle cx="50" cy="25" r="20" fill="#FF8C42" />
        
        {/* Left Ear */}
        <polygon points="35,8 30,0 40,10" fill="#FF8C42" stroke="#FF6B35" strokeWidth="0.5" />
        
        {/* Right Ear */}
        <polygon points="65,8 70,0 60,10" fill="#FF8C42" stroke="#FF6B35" strokeWidth="0.5" />
        
        {/* Inner Ears */}
        <polygon points="36,8 33,4 38,9" fill="#FFB997" />
        <polygon points="64,8 67,4 62,9" fill="#FFB997" />
        
        {/* Eyes */}
        <circle cx="43" cy="22" r="2" fill="#000" />
        <circle cx="57" cy="22" r="2" fill="#000" />
        
        {/* Pupils - reactive */}
        <circle className="pupil left-pupil" cx="43" cy="22" r="1.2" fill="#000" />
        <circle className="pupil right-pupil" cx="57" cy="22" r="1.2" fill="#000" />
        
        {/* Nose */}
        <polygon points="50,28 48,30 52,30" fill="#FF6B35" />
        
        {/* Mouth */}
        <path d="M 50 30 Q 45 33 42 31" stroke="#000" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 50 30 Q 55 33 58 31" stroke="#000" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        
        {/* Front Left Paw - Pointing */}
        <g className={`paw front-left ${pointingTarget === 'signup' ? 'pointing' : ''}`}>
          <rect x="32" y="70" width="6" height="20" fill="#FF8C42" rx="3" />
          <circle cx="35" cy="92" r="3.5" fill="#FF6B35" />
        </g>
        
        
        
        {/* Back Paws */}
        <rect x="38" y="80" width="5" height="18" fill="#FF8C42" rx="2.5" />
        <rect x="57" y="80" width="5" height="18" fill="#FF8C42" rx="2.5" />
        
        {/* Tail */}
        <path d="M 65 65 Q 80 50 75 30" stroke="#FF8C42" strokeWidth="8" fill="none" strokeLinecap="round" />
        
        {/* Blush */}
        <ellipse cx="32" cy="32" rx="4" ry="3" fill="#FFB997" opacity="0.6" />
        <ellipse cx="68" cy="32" rx="4" ry="3" fill="#FFB997" opacity="0.6" />
      </svg>
      
      <div className="hint-text">Click me!</div>
    </div>
  );
}
