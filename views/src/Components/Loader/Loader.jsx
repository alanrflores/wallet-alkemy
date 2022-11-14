import { ThreeDots } from "react-loader-spinner";

const Loader = ({ isVisible = true }) => {
  return (
    <ThreeDots
      height="70"
      width="70"
      radius="9"
      color="#999999"
      ariaLabel="three-dots-loading"
      visible={isVisible}
    />
  );
};

export default Loader;
