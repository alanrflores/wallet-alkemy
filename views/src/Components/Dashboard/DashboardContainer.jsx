import Dashboard from "./Dashboard.jsx";
import { Fragment } from "react";
import { useSelector } from "react-redux";


const DashboardContainer = () => {
  const user = useSelector(state => state.users.usersList);
  const loading = useSelector(state => state.users.loading);

  return (
    <Fragment>
      {user && !loading && <Dashboard user={user}/>}
    </Fragment>
  );
};

export default DashboardContainer;
