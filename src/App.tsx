import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { RouteProps } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

// import './App.css';

import ContainerResponsive from './components/elements/container-responsive/ContainerResponsive';


const App = ( props: RouteProps ): JSX.Element => {

  return (
    <div className="app">

      <ContainerResponsive>

        { props.children }

      </ContainerResponsive>            

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
  
}

App.propTypes = {
  children: PropTypes.node,
}

export default App;
