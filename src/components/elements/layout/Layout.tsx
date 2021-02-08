import React, { FC } from "react";
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { RouteProps } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import ContainerResponsive from '../container-responsive/ContainerResponsive';

interface LayoutProps extends RouteProps { };

const Layout: FC<LayoutProps> = ( props ): JSX.Element => {

  return (
    <div>

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

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout;
