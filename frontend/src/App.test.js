import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Future Power landing page', () => {
  render(<App />);
  expect(
    screen.getByText(/power your life with clean, renewable energy/i)
  ).toBeInTheDocument();
});
