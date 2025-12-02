import React, { useEffect, useRef } from 'react';
import { rainbowCursor } from './cursor';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    const cursor = rainbowCursor({});

    return () => {
      if (cursor && cursor.destroy) cursor.destroy();
    };
  }, []);

  useEffect(() => {
  const audioURL = process.env.PUBLIC_URL + "/meow.mp3";

  const meow = new Audio(audioURL);
  meow.preload = "auto";

  const playSound = () => {
    const s = new Audio(audioURL);
    s.play().catch(() => {});
  };

  window.addEventListener("click", playSound);

  return () => window.removeEventListener("click", playSound);
}, []);

  const musicRef = useRef(null);

  useEffect(() => {
    const musicURL = process.env.PUBLIC_URL + "/music.mp3";
    const music = new Audio(musicURL);
    music.loop = true;
    music.volume = 0.6;
    music.preload = 'auto';
    musicRef.current = music;

    const tryPlay = async () => {
      try {
        await music.play();
      } catch (err) {
        const onFirstGesture = async () => {
          try { await music.play(); } catch (e) {}
          window.removeEventListener('click', onFirstGesture);
          window.removeEventListener('touchstart', onFirstGesture);
        };
        window.addEventListener('click', onFirstGesture, { once: true });
        window.addEventListener('touchstart', onFirstGesture, { once: true });
      }
    };

    tryPlay();

    return () => {
      try { music.pause(); } catch (e) {}
      musicRef.current = null;
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
