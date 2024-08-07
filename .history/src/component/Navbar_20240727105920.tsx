import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="fixed bg-black bg-opacity-30  mobile:justify-between mobile:mx-5 backdrop-blur-sm flex justify-evenly items-center text-xl top-0 left-0 bottom-0  w-full h-20">
        <div className="">
          <Link to="/">
            <p className="text-white text-3xl font-bold  transition duration-300 cursor-pointer">
              Issa <span className="text-[#fc5c06]">Muiz</span>
            </p>
          </Link>
        </div>
        <div className="text-white  text-2xl flex  gap-5 mobile:hidden tablet:flex">
          <div>
            <Link
              to="/"
              className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="about"
              className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="services"
              className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer"
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              to="project"
              className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer"
            >
              Projects
            </Link>
          </div>
        </div>
        <div className="mr-10">
          <div className="mobile:hidden desktop:block tablet:block">
            <Link
              to="contact-me"
              className="text-white text-sm p-2 hover:bg-[#c74804] cursor-pointer bg-[#fc5c06] rounded-2xl"
            >
              Contact Me
            </Link>
          </div>
          <div>
            <svg
              className="fill-[#c74804] tablet:hidden desktop:hidden mobile:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px"
            >
              <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 top-[-5] right-0  bg-[#080808] flex-col text-white mt-40 backdrop-blur-sm  bg-opacity-30 pr-32 border-2 border-[#fc5c06] pl-2 rounded-lg py-5 gap-8">
        <div className="">
          <div className="hover:text-[#fc5c06] hover:border-b hover:border-[#fc5c06] pr-32 pb-2">
            <Link to="/">Home</Link>
          </div>

          <div className="hover:text-[#fc5c06] hover:border-b hover:border-[#fc5c06] pr-32 pb-2">
            <Link to="about">About</Link>
          </div>
          <div className="hover:text-[#fc5c06] hover:border-b hover:border-[#fc5c06] pr-32 pb-2">
            <Link to="services">Service</Link>
          </div>
          <div className="hover:text-[#fc5c06] hover:border-b hover:border-[#fc5c06] pr-32 pb-2">
            <Link to="project">Project</Link>
          </div>
          <div className="hover:text-[#fc5c06] hover:border-b hover:border-[#fc5c06] pr-32 pb-2">
            <Link to="contact-me">Contact me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
