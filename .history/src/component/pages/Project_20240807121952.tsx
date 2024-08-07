const Project = () => {
  return (
    <div className="pt-20">
      <h1 className="text-white font-bold text-5xl  text-center ">Projects</h1>
      <div className=" desktop:flex tablet:flex mobile:grid mt-16 justify-center gap-5">
        <div className="font-bold rounded-lg text-center text-3xl h-[500px] w-80 bg-black hover:-translate-y-2  text-white cursor-pointer border-2 border-[#fc5c06] hover:shadow-custom2 ">
          <div className="mt-2 ">
            <img
              className="px-2 pt-2 rounded-xl"
              src="assets/online community app.jpg"
              alt=""
            />
            <p className="mt-4">Project 1</p>
            <p className="text-white text-[15px] h-[200px] font-normal leading-5 mt-2 p-2">
              I embark on this project to hone my skills in front-end
              development and explore the complexitites of building a fully
              responsive community-focused platform. The tools used are React,
              Tailwind CSS, Firebase for authentication of users, firebase
              firestore is also used to store and retrieve users comments on a
              post.
            </p>
            <button className="bg-[#fc5c06] font-normal hover:bg-[#e05103] rounded-3xl text-sm p-2 ">
              Review Project
            </button>
          </div>
        </div>
        <div className="font-bold  rounded-lg text-center hover:-translate-y-2 text-3xl h-[500px] w-80 bg-black text-white cursor-pointer border-2 border-[#fc5c06] hover:shadow-custom2 ">
          <div className="mt-2">
            <img
              className="px-2 pt-2 rounded-xl"
              src="assets/amazon-clone pics.jpg"
              alt=""
            />
            <p className="mt-4">Project 2</p>
            <p className="text-white text-[15px] h-[200px] font-normal leading-5 mt-2 p-2">
              This project was developed as a front-end application, this clone
              showcases my ability to build my skills in building scalable
              e-commerce applications and implementing features like user
              aunthentication with firebase and real-time of product added to
              cart with price update using redux toolkit.
            </p>
            <button className="bg-[#fc5c06] font-normal hover:bg-[#e05103] rounded-3xl text-sm p-2">
              Review Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
