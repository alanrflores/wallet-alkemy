import HeaderContainer from "../../Components/Header/HeaderContainer";
import FooterContainer from "../../Components/Footer/FooterContainer";
import MovementsContainer from "../../Components/Movements/MovementsContainer";
import {motion} from 'framer-motion';

const MovementsPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6 min-h-screen">
        <h1 className="text-4xl font-bold">My Movements</h1>
        <MovementsContainer />
      </main>
      <FooterContainer />
      </motion.div>
  );
};

export default MovementsPage;
