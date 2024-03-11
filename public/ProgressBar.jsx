import React, { useState } from 'react';
import './css/progress-bar.css'; // Progress bar styles

const ProgressBar = () => {
  // Status to store the progress of each indicator
  const [progress, setProgress] = useState({
    'SEO & Marketing': 8,
    'Web Design': 7,
    'Graphic Design': 3,
  });

  return (
    <div className="progress-bar-container">
      {Object.entries(progress).map(([indicator, value]) => (
        <div key={indicator} className="progress-indicator">
          <div className="indicator-name">{indicator}</div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(value / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
