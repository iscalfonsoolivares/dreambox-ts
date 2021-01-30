
import { useDispatch } from 'react-redux';

import { logout } from '../../../store/auth/authAction';

const DashboardPage = (): JSX.Element => {

  const dispatch = useDispatch();

  const handleSubmit =  () => {
    dispatch(logout());
  }

  return (
    <div className="dashboard" >
 
      <br />
      <button onClick={() => handleSubmit()}>
        Logout
      </button>

    </div>
  );
}

export default DashboardPage;
