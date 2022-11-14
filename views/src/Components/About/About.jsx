const About = ({ members }) => {
  return (
    <section className="flex flex-col">
      <div className="flex text-xl flex-wrap flex-col gap-6 items-start justify-center max-w-5xl">
        <div className="flex flex-col gap-4">
          <p className="">
            We are a great organization composed by six collaborators who focus
            on the client safety and the easiness to administrate and carry on
            all your wallet projects.
          </p>
          <p className="">
            With Wallet everything is easier. You make the calls to make a
            payment or transfer, even add some funds to start using this app
            while devs take care of watch all the environment for you.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            This project was possible thanks to the members of the organization:
          </p>
          <div className="flex flex-wrap flex-col items-center w-full sm:flex-row lg:max-w-xl justify-between">
            {members.map(({ name, img, url }) => (
              <a
                className="flex gap-4 py-4 px-2 sm:w-2/4 items-center w-full hover:text-teal-500 duration-200 group"
                href={url}
                key={name}
                target="_blank"
              >
                <img
                  src={img}
                  className="rounded-full w-16 h-16 group-hover:opacity-80 duration-200"
                />
                <p className="text-xl">{name}</p>
              </a>
            ))}
          </div>
        </div>
        <p className="">
          All the developers possess an unique approach among excellent
          expertises.
        </p>
        <p>
          Working together as a team was a fun task in which the only thing that
          was remained as objective was provide the users the correct
          functionalities and an easy access, among with the safety provided
          that characterizes us.
        </p>
        <h2 className="text-2xl font-bold">
          Fellowship, patience and vision is what makes us great.
        </h2>
      </div>
    </section>
  );
};

export default About;
