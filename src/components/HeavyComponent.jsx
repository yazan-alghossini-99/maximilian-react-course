import React from 'react';

const HeavyComponent = React.memo(({ value }) => {
  console.log('HeavyComponent rendered');
  // Simulate heavy calculation
  const result = Array.from({ length: 1000 }).map((_, i) => i * value);
  return <div>Calculated Result: {result[999]}</div>;
});

export default HeavyComponent;
