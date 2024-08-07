const Navbar = () => {
  return (
    <div className="fixed bg-black backdrop-blur-10 flex justify-evenly top-0 left-0 bottom-0 bg-transparent w-full h-20">
      <div>
        <p className="text-white">Issa Muiz</p>
      </div>
      <div className="text-white flex gap-4">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Project</div>
        <div>contact</div>
      </div>
      <div>
        <div className="text-white">Contact Me</div>
      </div>
    </div>
  );
};

export default Navbar;
