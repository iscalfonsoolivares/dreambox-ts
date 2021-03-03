import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('Hero renders right styles on desktop', () => {

  const desktopPrimaryHeaderFontSize = '4em';
  const desktopPrimaryHeaderMarginTop = '2em';
  const desktopSecondaryHeaderFontSize = '1.7em';
  const desktopSecondaryHeaderMarginTop = '1.5em';
  const desktopButtonFontSize = '1.7em';
  const desktopButtonMarginBottom = '3em';

  render(<Hero />);

  const primaryHeader = screen.getByText(/Imagine-a-Company/i);
  const secondaryHeader = screen.getByText(/Do whatever you want when you want to/i);
  const buttonElement = screen.getByText(/Get Started/i);

  expect(primaryHeader).toBeInTheDocument();
  expect(primaryHeader).toHaveStyle(`font-size: ${ desktopPrimaryHeaderFontSize }`);
  expect(primaryHeader).toHaveStyle(`margin-top: ${ desktopPrimaryHeaderMarginTop }`);
  
  expect(secondaryHeader).toBeInTheDocument();
  expect(secondaryHeader).toHaveStyle(`font-size: ${ desktopSecondaryHeaderFontSize }`);
  expect(secondaryHeader).toHaveStyle(`margin-top: ${ desktopSecondaryHeaderMarginTop }`);

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveStyle(`font-size: ${ desktopButtonFontSize }`);
  expect(buttonElement).toHaveStyle(`margin-bottom: ${ desktopButtonMarginBottom }`);

});

test('Hero renders right styles on mobile', () => {

  const mobilePrimaryHeaderFontSize = '2em';
  const mobilePrimaryHeaderMarginTop = '1.5em';
  const mobileSecondaryHeaderFontSize = '1.5em';
  const mobileSecondaryHeaderMarginTop = '0.5em';
  const mobileButtonFontSize = '1.5em';
  const mobileButtonMarginBottom = '1.5em';

  render(<Hero small={ true } />);

  const primaryHeader = screen.getByText(/Imagine-a-Company/i);
  const secondaryHeader = screen.getByText(/Do whatever you want when you want to/i);
  const buttonElement = screen.getByText(/Get Started/i);

  expect(primaryHeader).toBeInTheDocument();
  expect(primaryHeader).toHaveStyle(`font-size: ${ mobilePrimaryHeaderFontSize }`);
  expect(primaryHeader).toHaveStyle(`margin-top: ${ mobilePrimaryHeaderMarginTop }`);
  
  expect(secondaryHeader).toBeInTheDocument();
  expect(secondaryHeader).toHaveStyle(`font-size: ${ mobileSecondaryHeaderFontSize }`);
  expect(secondaryHeader).toHaveStyle(`margin-top: ${ mobileSecondaryHeaderMarginTop }`);

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveStyle(`font-size: ${ mobileButtonFontSize }`);
  expect(buttonElement).toHaveStyle(`margin-bottom: ${ mobileButtonMarginBottom }`);

});

