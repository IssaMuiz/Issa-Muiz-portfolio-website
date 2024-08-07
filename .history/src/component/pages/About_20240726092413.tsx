const About = () => {
  return (
    <div>
      <div className="flex pt-40 justify-center items-center m-auto gap-10">
        <div className="">
          <img
            className="rounded-full h-[22rem] w-[22rem] border"
            src="assets/Issa muiz pic.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="text-white text-lg  w-96">
            <span className="text-3xl font-bold">
              About <span className="text-[#fc5c06]">Me</span>
            </span>
            <p>
              I am a proficient react developer, i specialize in developing
              user-friendly interface using React, and i am well-versed in
              modern JavaScript, HTML, and CSS. My expertise extends to state
              managment libraries like redux toolkit, i have had the opportunity
              to work on a personal project like a clone amazon website and a
              personal online forum application
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
