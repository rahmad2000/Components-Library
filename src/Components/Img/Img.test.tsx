import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Additional import for extended matchers
import Img from './Img';

describe('Img', () => {
  test('renders Img component', () => {
    render(<Img src="https://unsplash.com/photos/a-horse-walking-down-a-dirt-road-La07GK4Cxr0" alt="Test Image" />);
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  test('Img changes opacity when disabled', () => {
    render(<Img src="https://unsplash.com/photos/a-horse-walking-down-a-dirt-road-La07GK4Cxr0" alt="Disabled Image" disabled />);
    const img = screen.getByAltText('Disabled Image');
    expect(img).toHaveStyle('opacity: 0.5');
  });
});
