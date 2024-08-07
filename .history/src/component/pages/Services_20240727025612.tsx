const Services = () => {
  const frontendText = "< >";
  return (
    <div>
      <h1 className="text-white text-5xl  text-center pt-20">Services</h1>
      <div className="pt-20">
        <div className="font-bold rounded-lg text-center text-3xl h-96 w-72 m-auto bg-[#fc5c06] cursor-pointer hover:border-2 hover:bg-black hover:text-[#fc5c06] hover:border-[#fc5c06] hover:shadow-custom">
          <p className="pt-20">{frontendText}</p>
          <p>
            Frontend <br /> Development
          </p>
          <p className="text-[15px] font-normal leading-5 mt-6 ">
            As a passionate front-end developer, I specialize in creating
            visually stunning and highly responsive websites. With a keen eye
            for desing and a strong foundation in modern web technologies, I
            trasform ideas into interactive digital experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
