import React from 'react';
import '../css/progress-bar.css'; // Styles for the language bar

const LanguageBar = () => {
  // Object containing languages and their proficiency scale
  const languages = {
    'English': 8,
    'Spanish': 10,
    'French': 4,
  };

  // Filter and sort available languages
  const availableLanguages = Object.entries(languages)
    .sort(([lang1], [lang2]) => lang1.localeCompare(lang2)); // Sort alphabetically

  // Return JSX elements for available languages
  return (
    <div className="progress-bar-container">
      {availableLanguages.map(([language, value]) => (
        <div key={language} className="progress-indicator">
          <div className="indicator-name">{language}</div>
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

export default LanguageBar;
