import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm({ onGoBack }) {
  const [submitted, setSubmitted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coffeeType: '',
    grinder: '',
    roast: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.coffeeType === 'espresso') {
      setRejected(true);
    } else {
      // Handle successful submission
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  if (submitted) {
    return (
      <div className="signup-container">
        <div className="success-message">
          <h2>Welcome to the Club!</h2>
          <p>Your application has been brewed successfully.</p>
          <button 
            className="submit-btn"
            onClick={onGoBack}
          >
            Back to Cup
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
      <form className="signup-form" onSubmit={handleSubmit}>
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
            <option value="americano">Pour Over</option>
            <option value="americano">Drip</option>
            <option value="americano">Cortado</option>
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
                required 
              /> 
              Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="grinder" 
                value="no" 
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