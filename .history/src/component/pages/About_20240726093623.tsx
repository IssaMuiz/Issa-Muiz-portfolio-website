import { useState } from "react";

const About = () => {
  const [expand, setExpend] = useState(false);

  const toggleExpand = () => {
    setExpend(!expand);
  };

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
            <p></p>
            <div>
              {expand ? (
                <div>
                  <button className="border p-1 rounded-xl bg-[#fa5801] hover:bg-[#b34002] mt-2">
                    Read more
                  </button>
                </div>
              ) : (
                <div>
                  <button className="border p-1 rounded-xl bg-[#fa5801] hover:bg-[#b34002] mt-2">
                    Read less
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
