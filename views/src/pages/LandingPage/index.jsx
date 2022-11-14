import Landing from "../../Components/Landing/Landing.jsx";
import FooterContainer from "../../Components/Footer/FooterContainer.jsx";
import HeaderContainer from "../../Components/Header/HeaderContainer.jsx";
import {motion} from 'framer-motion';
import Swal from "sweetalert2";

const LandingPage = ({ fireSwal }) => {
  const fire = async () => {
    await Swal.fire({
      position: "start",
      icon: "error",
      showCancelButton: false,
      title: `Ups, we can't find that path you're searching for`,
      showConfirmButton: false,
      timer: 1600,
    });
    window.location.assign("http://127.0.0.1:5173")
  }
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
       {fireSwal && fire()}
      <HeaderContainer />
      <Landing />
      <FooterContainer />
    </motion.div>
  );
};


export default LandingPage;