import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import { breakpoints } from '../../../helpers/breakpoints';
import Hero from '../../elements/hero/Hero';

interface HomePageMatchParams { };

interface HomePageProps extends RouteComponentProps< HomePageMatchParams > { };

const HomePage: FC< HomePageProps > = (): JSX.Element => {

  const isTabletOrMobile = useMediaQuery({ query: breakpoints.tablet });

  return (
    <Grid container >

      <Grid.Row>
        <Grid.Column width='sixteen'>
          <Hero small={ isTabletOrMobile } /> 
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width='sixteen'>

          this is home

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />


          <Link to="/test">Go to Test</Link>

        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
}

export default HomePage;
