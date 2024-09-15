import React, { useRef, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

function App() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Start with audio muted

  // Function to toggle mute/unmute and play audio
  const toggleMute = () => {
    if (audioRef.current) {
      // Toggle mute state
      if (isMuted) {
        // Unmute and play audio
        audioRef.current.muted = false;
        audioRef.current
          .play()
          .catch((error) => console.error('Error playing audio:', error));
      } else {
        // Mute the audio
        audioRef.current.muted = true;
      }
      // Update the mute state
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="App">
      {/* Background overlay and content */}
      <div className="overlay"></div>
      <div className="title-container">
        <h1 className="game-title">Spellswords</h1>
      </div>
      <div className="bottom-container">
        <div className="credits-container">
          <p>Created by Skyler Hartle and Alex Hartle</p>
        </div>
        <div className="button-container">
          <button className="play-button">Play</button>
        </div>
      </div>

      {/* Speaker icon button */}
      <div className="speaker-icon" onClick={toggleMute}>
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} size="2x" />
      </div>
      
      {/* Audio element */}
      <audio ref={audioRef} src="https://spellswords.blob.core.windows.net/spellswords/lute_music.mp4" loop muted /> {/* Start with muted */}
    </div>
  );
}

export default App;
