import HeaderContainer from "../../Components/Header/HeaderContainer";
import FooterContainer from "../../Components/Footer/FooterContainer";
import UserPerfil from "../../Components/User/UserPerfil";
import { motion } from "framer-motion";

const UserPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6 bg-gray-50">
        <h1 className="text-4xl font-bold">Your profile</h1>
        <UserPerfil />
      </main>
      <FooterContainer />
    </motion.div>
  );
};

export default UserPage;
