import React, { FC } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { Grid } from "semantic-ui-react";

interface ServicesPageParams { };

interface ServicesPageProps extends RouteComponentProps< ServicesPageParams > { };

const ServicesPage: FC< ServicesPageProps > = (): JSX.Element => {

  return (
    <Grid container >
      <Grid.Row>
        <Grid.Column width='sixteen'>
          Services Page
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

}

export default ServicesPage;
