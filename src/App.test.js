import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Home page by default', () => {
  render(<App />);
  const heading = screen.getAllByText(/Alessio Guida/i);
  expect(heading.length).toBeGreaterThan(0);
});

test('renders the router with expected routes', () => {
  render(<App />);
  const appDiv = document.querySelector('.App.container-fluid');
  expect(appDiv).toBeInTheDocument();
});
