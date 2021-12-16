import { render, screen } from '@testing-library/react';
import AppTwo from './AppTwo';

test('renders learn react link', () => {
  render(<AppTwo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
