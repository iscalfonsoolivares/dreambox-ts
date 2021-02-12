import React, { useState, FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import { RouteProps } from 'react-router-dom';
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const ContainerDesktop: FC<RouteProps> = ( props ): JSX.Element => {

  let location = useLocation();

  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed( false );
  const showFixedMenu = () => setFixed( true );

  return (
    <>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign='center'
          style={{ padding: '1em 0em' }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : undefined}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Menu.Item><Icon name='box' size='small' />BOX</Menu.Item>
              <Menu.Item as={Link} to='/' active={ location.pathname === '/' ? true : false } >Inicio</Menu.Item>
              <Menu.Item as={Link} to='/services' active={ location.pathname === '/services' ? true : false } >Servicios</Menu.Item>
              <Menu.Item as={Link} to='/company' active={ location.pathname === '/company' ? true : false } >Compañia</Menu.Item>
              <Menu.Item position='right'>
                <Button as={Link} to='/login' inverted={!fixed}>
                  Entrar
                </Button>
                <Button as={Link} to='/singup' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                  Registrarse
                </Button>
              </Menu.Item>
            </Container>
          </Menu>

        </Segment>
      </Visibility>

      { props.children }
      
    </>
  )

}

ContainerDesktop.propTypes = {
  children: PropTypes.node,
}

export default ContainerDesktop;