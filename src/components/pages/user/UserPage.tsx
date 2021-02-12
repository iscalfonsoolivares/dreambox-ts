import React, { FC, useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { Grid } from "semantic-ui-react";

interface UserPageParams {
  id: string;
};

interface UserPageProps extends RouteComponentProps< UserPageParams > { };

const UserPage: FC< UserPageProps > = ( { history, match: { params: { id }} } ): JSX.Element => {

  useEffect(() => console.log(id), [id]);

  return (
    <Grid container >
      <Grid.Row>
        <Grid.Column width='sixteen'>
          this is user page {id}
          <button onClick={ () => history.goBack()  } >regresar</button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default UserPage;
