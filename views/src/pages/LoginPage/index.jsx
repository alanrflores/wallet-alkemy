import React from "react";
import FooterContainer from "../../Components/Footer/FooterContainer.jsx";
import { FormLogin } from "../../Components/Forms/formLogin.jsx";
import FormLoginRegister from "../../Components/Forms/FormLoginRegister.jsx";
import HeaderContainer from "../../Components/Header/HeaderContainer.jsx";
import { motion } from "framer-motion";
const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeaderContainer />
      <FormLoginRegister />
      <FooterContainer />
    </motion.div>
  );
};

export default LoginPage;
