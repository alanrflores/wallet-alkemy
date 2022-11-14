import Movement from "./Movement";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../../redux/features/users/usersGetSlice";
import { useParams } from "react-router-dom";

const MovementContainer = () => {
  const user = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();
  const params = useParams();
  const [currMovement, setCurrMovement] = useState({});

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    setCurrMovement(user?.account?.transaction.find((t) => t.id === params.id));
  }, [setCurrMovement, user]);

  return (
    <>
      <Movement user={user} movement={currMovement}/>
    </>
  );
};

export default MovementContainer;
