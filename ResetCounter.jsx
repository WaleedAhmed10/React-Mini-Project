const ResetCounter = ({ onReset, currentCount }) => {
  return (
    <div style={{ border: "1px solid #007bff", padding: "10px", margin: "10px 0" }}>
      <h3>Reset Counter Component (Child)</h3>
      <p>Current Count from Parent: {currentCount}</p>
      <button onClick={onReset} style={{ backgroundColor: "#dc3545", color: "white" }}>
        Reset Counter to 0
      </button>
    </div>
  );
};

export default ResetCounter;