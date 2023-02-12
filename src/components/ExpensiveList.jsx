import { useMemo } from 'react';

function ExpensiveList({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.localeCompare(b));
  }, [items]);

  return (
    <ul>
      {sortedItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default ExpensiveList;
