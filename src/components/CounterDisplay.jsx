function CounterDisplay({ count }) {
  return (
    <div className="counter-display">
      <h2>Current Count</h2>
      <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{count}</span>
    </div>
  );
}

export default CounterDisplay;
