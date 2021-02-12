import PropTypes from 'prop-types'
import React, { FC } from 'react'
import {
  Button,
  Header,
  Icon
} from 'semantic-ui-react'

interface HeroProps {
  small?: boolean
}

const Hero: FC< HeroProps > = ( props ): JSX.Element => (
  <>
    <Header
      as='h1'
      content='Imagine-a-Company'
      style={{
        fontSize: props.small ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: props.small ? '1.5em' : '2em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      style={{
        fontSize: props.small ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: props.small ? '0.5em' : '1.5em',
      }}
    />
    <Button 
      primary 
      size='huge'
      style={{
        fontSize: props.small ? '1.5em' : '1.7em',
        marginBottom: props.small ? '1.5em' : '3em',
      }}
    >
      Get Started
      <Icon name='angle right' />
    </Button>
  </>
)

Hero.propTypes = {
  small: PropTypes.bool,
}

export default Hero;