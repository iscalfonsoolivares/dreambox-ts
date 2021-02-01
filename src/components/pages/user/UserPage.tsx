import { FC, useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom';

interface UserPageParams {
  id: string;
};

interface UserPageProps extends RouteComponentProps< UserPageParams > { };

const UserPage: FC< UserPageProps > = ( { history, match: { params: { id }} } ): JSX.Element => {

  useEffect(() => console.log(id), [id]);

  return (
    <div className="not-found" >

      this is user page {id}

      <button onClick={ () => history.goBack()  } >regresar</button>

    </div>
  );
}

export default UserPage;
