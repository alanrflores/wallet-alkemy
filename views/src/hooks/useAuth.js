import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../redux/features/users/usersGetSlice";
import { endPoints } from "../services/api";
import { useDispatch } from "react-redux";

function useAuth() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = async (email, password) => {
    const options = {
      Headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(endPoints.auth.login, { email, password }, options);
      if (data) {
        let token = localStorage.getItem("access_token");
        if(token) localStorage.removeItem("access_token");
        localStorage.setItem("access_token", data.token);
        dispatch(getUsers(data.token));
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        throw error;
      }
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    delete axios.defaults.headers.Authorization;
  };

  return { signIn, logout };
}

export {useAuth}
