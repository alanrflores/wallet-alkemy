import "./App.css";
import { AnimatePresence } from 'framer-motion'; 
import AnimateRoutes from "./Components/animated/AnimateRoutes";

function App() {
  return (
    <AnimatePresence>
      <AnimateRoutes />
    </AnimatePresence>
  );
}

export default App;
