import { render, screen } from '@testing-library/react';
import CounterDisplay from './CounterDisplay';

test('renders current count', () => {
  render(<CounterDisplay count={5} />);
  expect(screen.getByText('5')).toBeInTheDocument();
});
