import React from 'react';
import { render, screen } from '@testing-library/react';
import App from ':./App';

test('home work as expected', () => {
 render(<App/>)
  const gifLink=screen.querySelector('.Gif-link')
  expect(gifLink).toBeVisible()
});

