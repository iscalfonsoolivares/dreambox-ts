import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import ContainerResponsive from './ContainerResponsive';
import { Router } from 'react-router-dom';

test('Rendering desktop menu', async () => {

  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <ContainerResponsive isTabletOrMobile={ false } />
    </Router>
  );

  const linkElement = screen.getByText(/Inicio/i);

  expect(linkElement).toBeInTheDocument();

});

test('Rendering mobile menu', async () => {

  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <ContainerResponsive isTabletOrMobile={ true } />
    </Router>
  );

  const linkElement = screen.getByText(/Inicio/i);
  
  expect(linkElement).toBeInTheDocument();

});