const Socials = ({ socials }) => {
  return (
    <ul className="flex flex-col gap-2">
      {socials.map(({ icon, label, url }) => (
        <li key={label}>
          <a
            className="flex items-center gap-3 w-fit group sm:text-sm text-lg"
            href={url}
            target="_blank"
          >
            <i>{icon}</i>
            <p className="group-hover:text-teal-600 duration-200">{label}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
