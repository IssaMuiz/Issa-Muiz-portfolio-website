const Navbar = () => {
  return (
    <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-evenly items-center text-xl top-0 left-0 bottom-0  w-full h-20">
      <div>
        <p className="text-white font-bold hover:-tracking-wider transition duration-300 cursor-pointer">
          Issa <span className="text-[#fc5c06]">Muiz</span>
        </p>
      </div>
      <div className="text-white flex gap-4">
        <div className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer">
          Home
        </div>
        <div className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer">
          About
        </div>
        <div className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer">
          Services
        </div>
        <div className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer">
          Project
        </div>
        <div className="hover:text-[#fc5c06] hover:underline transition duration-300 cursor-pointer">
          contact
        </div>
      </div>
      <div>
        <div className="text-white text-sm p-2 hover:bg-[#c74804] cursor-pointer bg-[#fc5c06] rounded-2xl">
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default Navbar;
