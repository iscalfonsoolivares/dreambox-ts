// import React, { useState, useEffect } from 'react';
import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

//import { login } from '../../../store/auth/authAction';
import { isAuthenticated, message, loginLoading } from '../../../store/auth/authSelector';
import { RouterProps } from 'react-router-dom';
//import MyDetailsForm from '../../elements/my-details-form/my-details-form';

const SingUpPage = ( props: RouterProps ): JSX.Element => {

  const { history } = props;

  const isAuthenticatedSelector = useSelector(isAuthenticated);
  const messageSelector = useSelector(message);
  const loginLoadingSelector = useSelector(loginLoading);
  
  // const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticatedSelector) history.push('/dashboard');
    if (messageSelector) toast.error(messageSelector);
    // setShowLoading(loginLoadingSelector) 
  }, [isAuthenticatedSelector, messageSelector, loginLoadingSelector, history]);

  return (
    <div className="singup" >

      <Grid textAlign='center' style={{ marginTop: 0, marginBottom: 0 }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='First name' />
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' />
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      
    </div>
  );
}

export default SingUpPage;
