import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { RouteProps } from 'react-router-dom';

import ContainerDesktop from '../container-desktop/ContainerDesktop';
import ContainerMobile from '../container-mobile/ContainerMobile';
import { MediaContextProvider } from '../../../helpers/breakpoints';

const ContainerResponsive: FC<RouteProps> = ( props ): JSX.Element => {
  return (
    <MediaContextProvider>
      <ContainerDesktop>{props.children}</ContainerDesktop>
      <ContainerMobile>{props.children}</ContainerMobile>
    </MediaContextProvider>
  )
};

ContainerResponsive.propTypes = {
  children: PropTypes.node,
}

export default ContainerResponsive;