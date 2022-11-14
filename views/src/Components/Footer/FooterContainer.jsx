import Footer from "./Footer.jsx";

// Icons
import { FiFacebook, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const FooterContainer = () => {
  const socials = [
    {
      icon: <FiFacebook />,
      label: "Facebook",
      url: "https://www.facebook.com/AlkemyLATAM",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/alkemy2020/",
    },
    {
      icon: <FiInstagram />,
      label: "Instagram",
      url: "https://www.instagram.com/alkemy__/",
    },
    {
      icon: <FiTwitter />,
      label: "Twitter",
      url: "https://twitter.com/alkemy__",
    },
  ];

  return (
    <>
      <Footer socials={socials} />
    </>
  );
};

export default FooterContainer;
