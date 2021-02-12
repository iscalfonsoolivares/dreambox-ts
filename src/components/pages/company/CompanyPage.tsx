import React, { FC } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { Grid } from "semantic-ui-react";

interface CompanyPageMatchParams { };

interface CompanyPageProps extends RouteComponentProps< CompanyPageMatchParams > { };

const CompanyPage: FC< CompanyPageProps > = (): JSX.Element => {
  return (
    <Grid container >
      <Grid.Row>
        <Grid.Column width='sixteen'>
          Company Page
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CompanyPage;
