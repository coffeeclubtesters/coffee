import { useState } from 'react';
import './App.css';
import SignupForm from './SignupForm';
import HaterWall from './HaterWall';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showHaterWall, setShowHaterWall] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="App">
      {showHaterWall ? (
        <HaterWall onGoBack={() => setShowHaterWall(false)} />
      ) : showSignup ? (
        <SignupForm onGoBack={() => setShowSignup(false)} />
      ) : (
        <div>
          <div 
            className="coffee-cup" 
            onClick={() => setShowSignup(true)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="coffee-liquid">
              <span className="bubble"></span>
              <span className="bubble"></span>
            </div>

            <div className="coffee-sleeve">
              {"COFFEE CLUB".split('').map((char, index) => (
                <span 
                  className={`sleeve-char ${char === ' ' ? 'space' : ''}`}
                  key={index}
                  data-char={char}
                >
                  {char}
                </span>
              ))}
            </div>

            <div className={`click-prompt ${isHovering ? 'light-text' : ''}`}>
              Click to Join!
            </div>
          </div>

          {/* Button to navigate to Hater Wall 
          <button className="hater-wall-button" onClick={() => setShowHaterWall(true)}>
            View Banned Users
          </button>*/}
        </div>
      )}
    </div>
  );
}

export default App;
