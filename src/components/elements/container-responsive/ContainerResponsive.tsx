import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { RouteProps } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import ContainerDesktop from '../container-desktop/ContainerDesktop';
import ContainerMobile from '../container-mobile/ContainerMobile';
import { breakpoints } from '../../../helpers/breakpoints';

const ContainerResponsive: FC<RouteProps> = ( props ): JSX.Element => {
  const isTabletOrMobile = useMediaQuery({ query: breakpoints.tablet });
  return (
    <>
      {
        isTabletOrMobile ? <ContainerMobile>{props.children}</ContainerMobile> : <ContainerDesktop>{props.children}</ContainerDesktop>
      }
    </>
  )
};

ContainerResponsive.propTypes = {
  children: PropTypes.node,
}

export default ContainerResponsive;