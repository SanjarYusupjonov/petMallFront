import React, { useEffect } from 'react';
import { rainbowCursor } from './cursor'; // Import your cursor function
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  // Rainbow cursor
  useEffect(() => {
    const cursor = rainbowCursor({});

    return () => {
      if (cursor && cursor.destroy) cursor.destroy();
    };
  }, []);

  useEffect(() => {
  const audioURL = process.env.PUBLIC_URL + "/meow.mp3";

  // Preload the audio fully so it’s ready instantly
  const meow = new Audio(audioURL);
  meow.preload = "auto";

  // For instant response, create a new Audio() each click
  const playSound = () => {
    const s = new Audio(audioURL);
    s.play().catch(() => {});
  };

  window.addEventListener("click", playSound);

  return () => window.removeEventListener("click", playSound);
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
