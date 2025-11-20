import React, { useEffect } from 'react';
import { rainbowCursor } from './cursor'; // Import your cursor function
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';

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

      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
