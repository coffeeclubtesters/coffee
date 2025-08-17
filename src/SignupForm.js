import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm({ onGoBack }) {
  const [rejected, setRejected] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coffeeType: '',
    grinder: '',
    roast: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    if (formData.coffeeType === 'espresso') {
      e.preventDefault();
      setRejected(true);
    }
    // Otherwise, do nothing: browser will submit form via POST
  };

  if (rejected) {
    return (
      <div className="signup-container">
        <div className="rejection-message">
          <h2>☕ Sorry!</h2>
          <p>Your application has been rejected because we're currently not accepting espresso drinkers.</p>
          <p>womp womp!</p>
          <button 
            className="submit-btn"
            onClick={() => setRejected(false)}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-container">
      <button className="back-button" onClick={onGoBack}>
        ← Back to Cup
      </button>

      <h2>Join Our Coffee Club</h2>
      <form 
        className="signup-form" 
        action="https://formsubmit.co/87b44e0d86e76a6885eef347f450e705" 
        method="POST"
        onSubmit={handleSubmit}
      >
        {/* Hidden config fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />

        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith" 
            required 
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com" 
            required 
          />
        </div>

        {/* Favorite Coffee Type */}
        <div className="form-group">
          <label htmlFor="coffeeType">Favorite Coffee</label>
          <select 
            id="coffeeType" 
            name="coffeeType"
            value={formData.coffeeType}
            onChange={handleChange}
            required
          >
            <option value="">Select your favorite...</option>
            <option value="espresso">Espresso</option>
            <option value="latte">Latte</option>
            <option value="cappuccino">Cappuccino</option>
            <option value="americano">Americano</option>
            <option value="pour-over">Pour Over</option>
            <option value="drip">Drip</option>
            <option value="cortado">Cortado</option>
          </select>
        </div>

        {/* Roast Preference */}
        <div className="form-group radio-group">
          <label>Coffee Roast Preference</label>
          <div className="radio-options roast-options">
            <label>
              <input 
                type="radio" 
                name="roast" 
                value="light"
                onChange={handleChange} 
                required 
              />
              <span className="roast-label light-roast">
                Light Roast
              </span>
            </label>
            <label>
              <input 
                type="radio" 
                name="roast" 
                value="medium"
                onChange={handleChange} 
              />
              <span className="roast-label medium-roast">
                Medium Roast
              </span>
            </label>
            <label>
              <input 
                type="radio" 
                name="roast" 
                value="dark"
                onChange={handleChange} 
              />
              <span className="roast-label dark-roast">
                Dark Roast
              </span>
            </label>
          </div>
        </div>

        {/* Coffee Grinder Field */}
        <div className="form-group radio-group">
          <label>Do you own a coffee grinder?</label>
          <div className="radio-options">
            <label>
              <input 
                type="radio" 
                name="grinder" 
                value="yes"
                onChange={handleChange} 
                required 
              /> 
              Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="grinder" 
                value="no"
                onChange={handleChange} 
              /> 
              No
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Brew My Membership
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
