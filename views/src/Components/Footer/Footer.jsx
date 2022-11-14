import Copyright from "./components/Copyright.jsx";
import Socials from "./components/Socials.jsx"

const Footer = ({ socials }) => {
  return (
    <footer className="border-t w-full flex flex-col-reverse sm:flex-row flex-wrap gap-8 justify-between items-center sm:px-16 p-6">
      <Copyright />
      <Socials socials={socials}></Socials>
    </footer>
  );
};

export default Footer;
