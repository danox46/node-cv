import React, { useState } from 'react';
import '../css/progress-bar.css'; // Estilos de la barra de progreso

const ProgressBar = () => {
  // Estado para almacenar el progreso de cada indicador
  const [progress, setProgress] = useState({
    'SEO & Marketing': 8,
    'Web Design': 7,
    'Graphic Design': 3,
  });

  // Ordenar los indicadores alfabéticamente
  const sortedProgress = Object.entries(progress).sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="progress-bar-container">
      {sortedProgress.map(([indicator, value]) => (
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
