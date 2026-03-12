function Child({ onIncrement }) {
  return (
    <button onClick={onIncrement}>
      Increase Count
    </button>
  );
}

export default Child;