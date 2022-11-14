import { instance } from "../../instance";
import { getUsers } from "../users/usersGetSlice";
import { addRoles } from "./rolesSlice";

export const createRoles = (value) => {
 return async(dispatch) => {
  try {
    const res = await instance().post('/roles/create', value)
    dispatch(addRoles(res.data));
    dispatch(getUsers);
  } catch (err) {
    console.log(err)
  };
 };
};