
import React, { FC } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Formik, FormikProps } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../../store/auth/authThunks';
import { loginLoading } from '../../../store/auth/authSelector';
import { Login } from '../../../store/auth/authInterfaces';

const CustomForm: FC< FormikProps <Login > > = (props): JSX.Element => {

  const loginLoadingSelector = useSelector(loginLoading);

  return (

      <Form size='large' onSubmit={props.handleSubmit} >
        <Segment stacked>
          <Form.Input 
            fluid icon='user'
            iconPosition='left' 
            placeholder='Nombre de usuario' 
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.username}
            name="username"    
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Contraseña'
            type='password'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.password}
            name="password"
          />

          <Button loading={ loginLoadingSelector } disabled={ loginLoadingSelector } color='teal' fluid size='large'>
            Entrar
          </Button>
        </Segment>
      </Form>

  );
};

const FormLogin = () => {

  const dispatch = useDispatch();
  const initialValues: Login = { username: '', password: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async ({username, password}, actions) => {
        await dispatch(login({ username, password }));
      }}
    >
      { props => <CustomForm {...props} />}
    </Formik>    
  );

}

export default FormLogin;

