import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from "./components/Routing";
import React, { useEffect, useRef } from 'react';
import welcomeaudio from './assets/audio/welcome.wav';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(welcomeaudio);
    audioRef.current = audio;

    audio.play()
      .catch(error => {
        console.error('Error playing audio:', error);
      });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
