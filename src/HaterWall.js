// HaterWall.js
function HaterWall({ onGoBack }) {
    return (
      <div className="hater-wall">
        <h2>Perma Banned</h2>
        <p className="hater-name">Franny Magdadaro</p>
        <button className="back-button" onClick={onGoBack}>
          Go Back
        </button>
      </div>
    );
  }
  
  export default HaterWall;
  