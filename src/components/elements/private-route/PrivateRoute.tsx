import { FC } from 'react'
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Route,
    Redirect,
    RouteProps
} from 'react-router-dom';
import { isAuthenticated } from '../../../store/auth/authSelector';

interface PrivateRouteProps extends RouteProps  {
    // tslint:disable-next-line:no-any
    component: any;
    // isSignedIn: boolean;
}

export const PrivateRoute: FC< PrivateRouteProps > = props => {

    const { component: Component, ...rest } = props;
    const isAuthenticatedSelector = useSelector(isAuthenticated);
    let history = useHistory();

    useEffect(() => {
      if (isAuthenticatedSelector) history.push('/dashboard');
    }, [isAuthenticatedSelector]);

    return (
        <Route
          {...rest}
          render={ routeProps =>
            isAuthenticatedSelector ? 
              (
                <Component {...routeProps} />
              ) : 
              (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: routeProps.location }
                    }}
                />
              )
          }
        />
    );
};