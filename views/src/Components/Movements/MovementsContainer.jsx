import Movements from "./Movements";
import { useEffect } from "react";
import { getUsers } from "../../redux/features/users/usersGetSlice";
import { useDispatch, useSelector } from "react-redux";

const MovementsContainer = () => {
  const user = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Movements user={user} />
    </>
  );
};

export default MovementsContainer;
