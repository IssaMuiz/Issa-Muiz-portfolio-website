import { useState } from "react";

const About = () => {
  const [expand, setExpend] = useState(false);

  const aboutText =
    "I am a proficient react developer, i specialize in developing user-friendly interface using React, JavaScript, HTML, and CSS. and i am well-versed in modern react libraries. My expertise extends to state managment libraries like redux toolkit, i have had the opportunity to work on a personal project like a clone amazon website and a personal online forum application";

  const toggleExpand = () => {
    setExpend(!expand);
  };

  return (
    <div>
      <div className="pt-40 justify-center items-center m-auto gap-10 tablet:flex desktop:flex mobile:grid">
        <div className="">
          <img
            className="rounded-full ml-7 h-[22rem] w-[22rem]  border"
            src="assets/Issa muiz pic.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="text-white text-lg  max-w-96">
            <span className="text-3xl font-bold">
              About <span className="text-[#fc5c06]">Me</span>
            </span>
            <p>{expand ? aboutText : aboutText.slice(0, 125) + ".."}</p>
            <div>
              <button
                onClick={toggleExpand}
                className="border p-2 text-sm rounded-3xl bg-[#fa5801] hover:bg-[#b34002] mt-2"
              >
                {expand ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
