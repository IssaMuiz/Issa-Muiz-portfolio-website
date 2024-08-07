import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-evenly items-center text-xl top-0 left-0 bottom-0  w-full h-20">
      <Link to="/">
        <p className="text-white text-3xl font-bold  transition duration-300 cursor-pointer">
          Issa <span className="text-[#fc5c06]">Muiz</span>
        </p>
      </Link>
      <Link to="/" className="text-white flex gap-4">
        <div className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer">
          Home
        </div>
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
      </Link>
      <div>
        <Link
          to="contact-me"
          className="text-white text-sm p-2 hover:bg-[#c74804] cursor-pointer bg-[#fc5c06] rounded-2xl"
        >
          Contact Me
        </Link>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
