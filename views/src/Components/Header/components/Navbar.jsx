
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiTeamLine } from "react-icons/ri";
import { cleanUserState } from "../../../redux/features/users/usersGetSlice";
import { useAuth } from "../../../hooks/useAuth";

const Navbar = ({ navs, handleToggle }) => {
  const user = useSelector((state) => state.users.usersList);

  const dispatch = useDispatch();
  const auth = useAuth()




  const clearState = () => {
    dispatch(cleanUserState());
    localStorage.removeItem("access_token")
 };


  return (
    <nav
      className={`lg:flex items-center ${
        handleToggle ? "flex" : "hidden"
      } gap-4 lg:flex-row lg:text-left flex-col w-full justify-between`}
    >
      <div className="flex flex-col w-full lg:flex-row gap-6">
        {user.length !== 0 ? (
          navs.map(({ text, url, icon }) => (
            <Link
              to={url}
              key={text}
              className="flex items-center gap-1 duration-200 hover:text-teal-500 border-b lg:border-none"
            >
              <i className="text-xl">{icon}</i>
              {text}
            </Link>
          ))
        ) : (
          <Link
            className="flex items-center gap-1 duration-200 hover:text-teal-500 border-b lg:border-none"
            to="/about"
          >
            <RiTeamLine />
            About Us
          </Link>
        )}
      </div>
      <div className="flex justify-end w-full gap-4">
        {user.length !== 0 ? (
          <>
            <Link
              onClick={()=> clearState()}
              className="py-4 px-3 hover:text-teal-500 duration-200"
              to={"/login"}

            >
              Logout
            </Link>
            <Link
              className="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              to="/user"
            >
              My Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              className="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              to="/login"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
