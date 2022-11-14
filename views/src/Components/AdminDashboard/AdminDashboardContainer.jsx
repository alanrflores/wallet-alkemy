import AdminDashboard from "./AdminDashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/features/transaction/transactionGetSlice";

const AdminDashboardContainer = () => {
  const movements = useSelector((state) => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
  
  console.log(movements);

  return (
    <>
      <AdminDashboard />
    </>
  );
};

export default AdminDashboardContainer;
