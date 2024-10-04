import React from 'react';




const DataVisualization: React.FC = ({}) => {


  return (
    <div
      id="unity-container"
      className="unity-desktop"
      style={{
        display: 'flex',              // Flexbox layout
        justifyContent: 'center',      // Centers horizontally
        alignItems: 'center',          // Centers vertically
        width: '70%',                 // Full width
        height: '70vh',               // Full viewport height
        maxWidth: '100%',              // Avoid overflow horizontally
        overflow: 'hidden',            // Ensure no overflow
      }}>
    <iframe
    title="Interactive Map"
    src="/NOAA_Map.html"
    style={{ border: 'none', width: '100%', height: '100%' }}
  />
  </div>
  );
};

export default DataVisualization;
