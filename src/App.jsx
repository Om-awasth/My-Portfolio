import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BuildNotes from './components/BuildNotes';
import Contact from './components/Contact';
import { Volume2, VolumeX } from 'lucide-react';
import './App.css';

function App() {
  const bgmRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Try to auto-play or play on first interaction
    const handleFirstInteraction = () => {
      if (bgmRef.current && !isPlaying) {
        bgmRef.current.volume = 0.4;
        bgmRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(e => console.log("Audio autoplay blocked by browser"));
      }
      // Remove listener after first interaction
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    if (bgmRef.current) {
      if (isPlaying) {
        bgmRef.current.pause();
        setIsPlaying(false);
      } else {
        bgmRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="app-container">
      <audio ref={bgmRef} src="/kaze-no-kata.mp3" loop />

      <button 
        onClick={toggleMusic} 
        className="audio-toggle interactive"
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying ? <Volume2 size={24} color="#d90429" /> : <VolumeX size={24} />}
      </button>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <BuildNotes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
