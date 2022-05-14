import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lwith crashing',async  () => {
  const {findByText}=render(<App />);
  const title = await findByText(/Ultima busqueda/i);
  expect(title).toBeInTheDocument();
});

