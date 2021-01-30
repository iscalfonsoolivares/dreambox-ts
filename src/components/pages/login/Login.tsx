import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Grid } from 'semantic-ui-react'
import { RouterProps } from 'react-router-dom';
import { isAuthenticated, message, loginLoading } from '../../../store/auth/authSelector';

import FormLogin from '../../elements/form-login/FormLogin';

const LoginPage = ( props: RouterProps ): JSX.Element => {

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
    
    <Grid container padded='vertically' >
      <Grid.Row>
        <Grid.Column width='5' />
        <Grid.Column width='six'>
          <FormLogin />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    
  );
}

export default LoginPage;
