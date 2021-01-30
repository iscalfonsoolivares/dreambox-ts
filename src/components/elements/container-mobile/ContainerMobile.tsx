import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RouteProps } from 'react-router-dom';
import {
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';

import { Media } from '../../../helpers/breakpoints';

const ContainerMobile = ( props: RouteProps ): JSX.Element => {

  let location = useLocation();

  useEffect(() => {
    handleSidebarHide();
  }, [location]);

  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleSidebarHide = () => setSidebarOpened( false )
  const handleToggle = () => setSidebarOpened( true )

  return (
    <Media at='mobile'>
      <Sidebar.Pushable style={{height: '100vh'}}>

        <Sidebar
          as={Menu}
          animation='overlay'
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} to='/' active={ location.pathname === '/' ? true : false } >Inicio</Menu.Item>
          <Menu.Item as={Link} to='/services' active={ location.pathname === '/services' ? true : false } >Servicios</Menu.Item>
          <Menu.Item as={Link} to='/company' active={ location.pathname === '/company' ? true : false } >Company</Menu.Item>
          <Menu.Item as={Link} to='/login' active={ location.pathname === '/login' ? true : false } >Entrar</Menu.Item>
          <Menu.Item as={Link} to='/singup' active={ location.pathname === '/singup' ? true : false } >Registrarse</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened} >
          <Segment
            inverted
            textAlign='center'
            style={{ padding: '.5em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={handleToggle}>
                  <Icon name='sidebar' size='big' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Icon name='box' size='big' />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {props.children}

        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}

ContainerMobile.propTypes = {
  children: PropTypes.node,
}

export default ContainerMobile;