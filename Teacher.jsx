const Teacher = (props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Teacher Information</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Subject:</strong> {props.subject}</p>
      <p><strong>Department:</strong> {props.department || "Not specified"}</p>
    </div>
  );
};

export default Teacher;