import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';
import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';

import authGuard from './components/hoc/authGuard';

import NotFoundPage from './components/pages/not-found/NotFound';
import HomePage from './components/pages/home/Home';
import ServicesPage from './components/pages/services/ServicesPage';
import CompanyPage from './components/pages/company/CompanyPage';
import LoginPage from './components/pages/login/Login';
import SingUpPage from './components/pages/singup/SingUpPage';
import DashboardPage from './components/pages/dashboard/Dashboard';
import TestPage from './components/pages/test/TestPage'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
              <Route exact path="/" component={HomePage}  />
              <Route exact path="/services" component={ServicesPage} />
              <Route exact path="/company" component={CompanyPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/singup" component={SingUpPage} />
              <Route exact path="/dashboard" component={ authGuard(DashboardPage) } />
              <Route exact path="/test" component={TestPage} />
              <Route component={NotFoundPage} />
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
