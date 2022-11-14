import { Link } from "react-router-dom";
import image from './../../../assets/wallet.png'

const Logo = () => {
  return (
    <Link
      to="/"
      className="group text-xl flex font-semibold items-center"
    >
      <img className="h-10 w-10 mr-1 mb-2" src={image} />
      <p className="font-bold group-hover:text-teal-600 duration-200">Wallet</p>
    </Link>
  );
};

export default Logo;
