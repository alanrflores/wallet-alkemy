import DashboardContainer from "../../Components/Dashboard/DashboardContainer.jsx";
import FooterContainer from "../../Components/Footer/FooterContainer.jsx";
import HeaderContainer from "../../Components/Header/HeaderContainer.jsx";
import { motion } from 'framer-motion';

const DashboardPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
        <h1 className="text-4xl font-bold">My Dashboard</h1>
        <DashboardContainer />
      </main>
      <FooterContainer />
    </motion.div>
  );
};

export default DashboardPage;
