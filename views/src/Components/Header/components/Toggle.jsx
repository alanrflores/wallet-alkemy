import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltLeft} from "react-icons/bi";

const Toggle = ({ handleToggle, setHandleToggle }) => {
  return (
    <button
      className="right-16 lg:hidden"
      onClick={() => setHandleToggle(!handleToggle)}
    >
      {!handleToggle ? (
        <BiMenuAltLeft className="w-8 h-8"/>
      ) : (
        <AiOutlineClose className="w-8 h-8" />
      )}
    </button>
  );
};

export default Toggle;
