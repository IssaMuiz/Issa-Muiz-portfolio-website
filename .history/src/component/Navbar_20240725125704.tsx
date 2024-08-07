const Navbar = () => {
  return (
    <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-evenly items-center text-xl top-0 left-0 bottom-0  w-full h-20">
      <div>
        <p className="text-white font-bold">
          Issa <span className="text-[#fc5c06]">Muiz</span>
        </p>
      </div>
      <div className="text-white flex gap-4">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Project</div>
        <div>contact</div>
      </div>
      <div>
        <div className="text-white text-sm bg-[#fc5c06] rounded-lg">
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default Navbar;
