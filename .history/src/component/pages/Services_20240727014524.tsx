const Services = () => {
  const frontendText = "< >";
  return (
    <div className="pt-40">
      <div className="font-bold rounded-lg text-center text-3xl h-96 w-72 m-auto bg-[#fc5c06] cursor-pointer hover:border-2 hover:bg-black hover:text-[#fc5c06] hover:border-[#fc5c06] hover:shadow-custom">
        <p className="pt-20">{frontendText}</p>
        <p>
          Frontend <br /> Development
        </p>
        <p className="text-[16px] font-bold leading-5 mt-6 font-normal">
          As a passionate front-end developer, I specialize in creating visually
          stunning and highly responsive websites. With a keen eye for desing
          and a strong foundation in modern web technologies, I trasform ideas
          into interactive digital experience
        </p>
      </div>
    </div>
  );
};

export default Services;
