import React from 'react';

export const LoadingScreen = () => {
  return (
    <div className="loader-wrapper">
      <div className="coffee-container">
        <div className="steam-container">
          <div className="steam-line"></div>
          <div className="steam-line"></div>
          <div className="steam-line"></div>
        </div>
        <div className="coffee-cup"></div>
      </div>
      <div className="brewing-text">Brewing Ideas...</div>
    </div>
  );
};
