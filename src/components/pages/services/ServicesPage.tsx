import { FC } from "react";
import { RouteComponentProps } from 'react-router-dom';

interface ServicesPageParams { };

interface ServicesPageProps extends RouteComponentProps< ServicesPageParams > { };

const ServicesPage: FC< ServicesPageProps > = (): JSX.Element => {

  return (
    <div className="services" >
      Services Page
    </div>
  );

}

export default ServicesPage;
