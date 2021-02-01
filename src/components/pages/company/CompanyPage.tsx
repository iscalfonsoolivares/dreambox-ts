import { FC } from "react";
import { RouteComponentProps } from 'react-router-dom';

interface CompanyPageMatchParams { };

interface CompanyPageProps extends RouteComponentProps< CompanyPageMatchParams > { };

const CompanyPage: FC< CompanyPageProps > = (): JSX.Element => {
  return (
    <div className="company" >

      Company Page

    </div>
  );
}

export default CompanyPage;
