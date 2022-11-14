import Navbar from "./components/Navbar.jsx";
import Logo from "./components/Logo.jsx";
import Toggle from "./components/Toggle.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { getUsers } from "../../redux/features/users/usersGetSlice.js";

const Header = ({ navs, handleToggle, setHandleToggle }) => {
  const user = useSelector((state) => state.users.userList)
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(getUsers());
  }, [user]);

  return (
    <header className="p-6 lg:px-16 gap-8 flex flex-col lg:flex-row lg:items-center justify-between border-b">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center">
          <Toggle
            handleToggle={handleToggle}
            setHandleToggle={setHandleToggle}
          />
        </div>
      </div>
      <Navbar navs={navs} handleToggle={handleToggle} />
    </header>
  );
};

export default Header;
