import React, { FC } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { Grid } from "semantic-ui-react";

interface NotFoundPageParams { };

interface NotFoundPageProps extends RouteComponentProps< NotFoundPageParams > { };

const NotFoundPage: FC< NotFoundPageProps > = (): JSX.Element => {
  return (
    <Grid container >
      <Grid.Row>
        <Grid.Column width='sixteen'>
          page not found
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default NotFoundPage;
