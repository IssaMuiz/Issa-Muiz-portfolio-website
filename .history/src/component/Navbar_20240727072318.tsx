import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-evenly items-center text-xl top-0 left-0 bottom-0  w-full h-20">
      <Link to="/">
        <p className="text-white text-3xl font-bold  transition duration-300 cursor-pointer">
          Issa <span className="text-[#fc5c06]">Muiz</span>
        </p>
      </Link>
      <div className="text-white flex gap-10 mobile:hidden tablet:block">
        <Link
          to="/"
          className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer"
        >
          About
        </Link>
        <Link
          to="services"
          className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="project"
          className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer"
        >
          Projects
        </Link>
      </div>
      <div className="mobile:hidden tablet:block">
        <Link
          to="contact-me"
          className="text-white text-sm p-2 hover:bg-[#c74804] cursor-pointer bg-[#fc5c06] rounded-2xl"
        >
          Contact Me
        </Link>
      </div>
      <div>
        <svg
          className="fill-[#c74804] desktop:hidden tablet: hidden mobile:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
        >
          <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
