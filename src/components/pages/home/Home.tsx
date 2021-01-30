import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import { Media } from '../../../helpers/breakpoints';
import Hero from '../../elements/hero/Hero';

const HomePage = (): JSX.Element => {

  return (
    <Grid container >

      <Media  at='mobile'>
        <Hero small /> 
      </Media>

      <Media greaterThan='mobile'>
        <Hero /> 
      </Media>

      <Grid.Row>
        <Grid.Column width='sixteen'>

          this is home

          <br />

          <Link to="/test">Go to Test</Link>

        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
}

export default HomePage;
