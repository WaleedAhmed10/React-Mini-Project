const Student = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Course: {props.course}</h3>
    </div>
  );
};

export default Student;