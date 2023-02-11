import { formatDate, capitalize } from './helpers';

test('formats date correctly', () => {
  expect(formatDate('2023-10-18')).toBe('10/18/2023');
});

test('capitalizes first letter', () => {
  expect(capitalize('react')).toBe('React');
});
