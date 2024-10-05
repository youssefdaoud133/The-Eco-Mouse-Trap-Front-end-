import React from 'react';




const DataVisualization: React.FC = ({}) => {


  return (
    <>
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
    src="./last_map.html"
    style={{ border: 'none', width: '100%', height: '100%' }}
  />

  </div>

    <div className="bg-yellow-200 text-yellow-900 p-4 rounded-lg">
      <p className="font-semibold">Note: When hovering the cursor over the markers it gives you the name of the site codes, while clicking on the markers gives you the concentration of CO2 and CH4 in ppm.</p>
    </div>

    </>
    
  
  );
};

export default DataVisualization;
