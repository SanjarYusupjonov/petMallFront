import React, { useEffect } from 'react';
import { rainbowCursor } from './cursor'; // Import your cursor function
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize the rainbow cursor when the component mounts
    const cursor = rainbowCursor({});

    return () => {
      if (cursor && cursor.destroy) cursor.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Navbar />

      <main style={{ padding: '2rem' }}>
        <h1>Welcome to Pet Adoption</h1>
        <p>Move your mouse around to see the rainbow cursor effect!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
