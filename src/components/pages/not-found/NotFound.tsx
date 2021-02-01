import { FC } from "react";
import { RouteComponentProps } from 'react-router-dom';

interface NotFoundPageParams { };

interface NotFoundPageProps extends RouteComponentProps< NotFoundPageParams > { };

const NotFoundPage: FC< NotFoundPageProps > = (): JSX.Element => {
  return (
    <div className="not-found" >

      page not found

    </div>
  );
}

export default NotFoundPage;
