import React, { useEffect } from 'react';
import { rainbowCursor } from './cursor';  // Import your cursor function

function App() {
  useEffect(() => {
    // Initialize the rainbow cursor when the component mounts
    const cursor = rainbowCursor({
              
    });

    return () => {
      cursor.destroy();
    };
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Pet Adoption</h1>
      <p>Move your mouse around to see the rainbow cursor effect!</p>
    </div>
  );
}

export default App;
