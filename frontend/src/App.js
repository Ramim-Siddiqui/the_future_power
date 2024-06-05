import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from "./components/Routing";
import React, { useEffect} from 'react';
import welcomeaudio from './assets/audio/welcome.wav';

function App() {
  useEffect(() => {
    const audioPlayer = document.getElementById('audioPlayer');
  
    // Play the audio only if it's paused
    if (audioPlayer.paused) {
      audioPlayer.play();
    }
  
    // Clean up by pausing the audio when the component unmounts
    return () => {
      audioPlayer.pause();
    };
  }, []);
  
  return (
    <>
      <audio id="audioPlayer" autoPlay>
        <source src={welcomeaudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Routing />
    </>
  );
}

export default App;
