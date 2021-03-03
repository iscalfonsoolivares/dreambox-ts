// myForm.test.js
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import  FormLogin  from './FormLogin'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

test('Rendering and submitting a basic Formik form', async () => {

  const handleSubmit = jest.fn();
  
  const reducer  = jest.fn().mockReturnValue({
    auth: {
      isAuthenticated:  false,
      token: '',
      message: '',
      loginLoading: false
    }
  });

  const store = createStore( reducer );

  render(
  <Provider store={ store }> 
    <FormLogin onSubmit={ handleSubmit } />
  </Provider>
  )

  const usernameInput = screen.getByPlaceholderText( /Nombre de usuario/i );
  const passwordInput = screen.getByPlaceholderText( /Contraseña/i );
  const submitButton = screen.getByRole('button', { name: /Entrar/i });

  userEvent.type( usernameInput, 'John' );
  userEvent.type( passwordInput, 'Dee' );
  userEvent.click( submitButton );

  await waitFor(() => {

    expect(handleSubmit).toHaveBeenCalledWith({ username: 'John', password: 'Dee' })
    
    // console.log( 'this is username ', (usernameInput as HTMLInputElement).value );
    // console.log( 'this is password ', (passwordInput as HTMLInputElement).value );

  });
  
})