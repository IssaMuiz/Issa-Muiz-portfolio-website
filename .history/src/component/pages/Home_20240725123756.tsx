import Navbar from "../Navbar";
const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main className="text-white text-right pt-20">
        <p className="w-80">
          <span className="text-4xl text-[#fc5c06]"> Hi, it's Muiz</span> <br />
          <span className="text-3xl"> I'm a React Developer</span> <br /> i am
          skilled and passionate web designer with experience in creating
          visually appealing and user-friendly website.
        </p>
      </main>
    </div>
  );
};

export default Home;
