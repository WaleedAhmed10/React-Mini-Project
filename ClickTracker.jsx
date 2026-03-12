import React, { useState } from "react";

const ClickTracker = () => {
  const [clicks, setClicks] = useState(0);
  const [lastClicked, setLastClicked] = useState(null);

  const handleClick = () => {
    setClicks(clicks + 1);
    setLastClicked(new Date().toLocaleTimeString());
  };

  const resetTracker = () => {
    setClicks(0);
    setLastClicked(null);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0" }}>
      <h2>Click Tracker</h2>
      <p><strong>Total Clicks:</strong> {clicks}</p>
      {lastClicked && <p><strong>Last Clicked:</strong> {lastClicked}</p>}
      <button onClick={handleClick}>Click Me!</button>
      {clicks > 0 && (
        <button onClick={resetTracker} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      )}
    </div>
  );
};

export default ClickTracker;