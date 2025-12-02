import React from 'react';
import './ChristmasLights.css';

export default function ChristmasLights() {
  const bulbs = ['red', 'green', 'yellow', 'blue', 'purple', 'orange', 'teal'];

  return (
    <div className="christmas-lights" aria-hidden="true">
      <div className="lights-string">
        {Array.from({ length: 14 }).map((_, i) => {
          const color = bulbs[i % bulbs.length];
          // Stagger animation using inline style delay
          const style = { animationDelay: `${(i % 6) * 0.12}s` };
          return <span key={i} className={`light ${color}`} style={style} />;
        })}
      </div>
    </div>
  );
}
