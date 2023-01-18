import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('renders learn react link', async () => {
  render(<Header />);
  const headingElement = screen.getByRole("link");
  expect(headingElement).toBeInTheDocument();
});

it('renders learn react link', async () => {
    render(<Header />);
    const headingElement = screen.getByTestId("header1");
    expect(headingElement).toBeInTheDocument();
});