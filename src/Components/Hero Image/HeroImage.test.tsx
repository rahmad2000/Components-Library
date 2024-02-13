import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImg from './HeroImage';

describe('HeroImg', () => {
  test('renders HeroImg component', () => {
    render(<HeroImg src="path/to/your/image.jpg" alt="Test Hero Image" />);
    expect(screen.getByAltText('Test Hero Image')).toBeInTheDocument();
  });

  test('HeroImg changes style when disabled', () => {
    render(<HeroImg src="path/to/your/image.jpg" alt="Disabled Hero Image" disabled />);
    const image = screen.getByAltText('Disabled Hero Image');
    expect(image).toHaveStyle('opacity: 0.5');
  });
});
