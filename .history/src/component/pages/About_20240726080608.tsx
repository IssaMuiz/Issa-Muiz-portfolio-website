import { Link } from "react-router-dom";

const About = () => {
  return (
    <Link to="about">
      <div className="flex">
        <div className="rounded-full ">
          <img
            className="rounded-full h-[22rem] w-[22rem] border"
            src="assets/Issa muiz pic.jpg"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default About;
