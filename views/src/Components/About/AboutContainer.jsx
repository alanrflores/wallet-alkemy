import About from "./About";

const AboutContainer = () => {
  const members = [
    {
      name: "Alejandro Senger",
      img: "https://avatars.githubusercontent.com/u/94654230?s=48&v=4",
      url: "https://github.com/Alex0711",
    },
    {
      name: "Julian Rodriguez",
      img: "https://avatars.githubusercontent.com/u/6536374?v=4",
      url: "https://github.com/julandrod",
    },
    {
      name: "Luis Salcedo",
      img: "https://avatars.githubusercontent.com/u/104780873?v=4",
      url: "https://github.com/Behelit0906",
    },
    {
      name: "Alan Flores",
      img: "https://avatars.githubusercontent.com/u/51032817?v=4",
      url: "https://github.com/alanrflores",
    },
    {
      name: "Tomas Benitez",
      img: "https://avatars.githubusercontent.com/u/89412698?v=4",
      url: "https://github.com/tmsbenitez",
    },
    {
      name: "Leonardo Echenique",
      img: "https://avatars.githubusercontent.com/u/104751508?v=4",
      url: "https://github.com/leoechenique",
    },
  ];

  return (
    <>
      <About members={members} />
    </>
  );
};

export default AboutContainer;
