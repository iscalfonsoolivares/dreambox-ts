import React, { FC } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import store from './store';
import Layout from './components/elements/layout/Layout';
import authGuard from './components/hoc/authGuard';
import NotFoundPage from './components/pages/not-found/NotFound';
import HomePage from './components/pages/home/Home';
import ServicesPage from './components/pages/services/ServicesPage';
import CompanyPage from './components/pages/company/CompanyPage';
import LoginPage from './components/pages/login/Login';
import SingUpPage from './components/pages/singup/SingUpPage';
import DashboardPage from './components/pages/dashboard/Dashboard';
import TestPage from './components/pages/test/TestPage';
import UserPage from './components/pages/user/UserPage';

interface AppProps { };

const App: FC<AppProps> = (): JSX.Element => {

  return (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path="/" component={HomePage}  />
              <Route exact path="/services" component={ServicesPage} />
              <Route exact path="/company" component={CompanyPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/singup" component={SingUpPage} />
              <Route exact path="/dashboard" component={ authGuard(DashboardPage) } />
              <Route exact path="/user/:id" component={ authGuard(UserPage) } />
              <Route exact path="/test" component={TestPage} />
              <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  );
  
}

export default App;
