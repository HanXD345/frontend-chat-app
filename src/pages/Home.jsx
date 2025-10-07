import React from "react";
import Navbar from "../components/Navbar";
import bgVideo from "../assets/background.mp4";
import userIcon from "../assets/user.png";
import robotIcon from "../assets/robot.png";
import bookIcon from "../assets/book.png";

const Home = () => {
  return (
    <div className="homepage h-[100vh] bg-[#D9D9D9]">
      <Navbar />
      <div className="h-full relative">
        <video
          className="object-cover brightness-75 h-full w-full absolute left-0 right-0 border-2"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="h-full flex justify-center items-center opacity-95 flex-col gap-10">
          <h1 className="md:text-5xl text-pretty text-center text-[8vw] text-white break-normal">
            Communication that empowers
          </h1>
          <button className="md:text-lg text-[2.5vw] bg-[#D9D9D9] hover:cursor-pointer px-5 py-2 rounded-xl transition duration-300 ease-in-out hover:opacity-50">
            Sign up for our A.I. powered chat app
          </button>
        </div>
      </div>
      <div className="bg-[#D9D9D9] grid md:grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] place-content-around gap-10 text-center align-center p-[8vw]">
        <div className="border rounded-sm border-black p-15 md:row-start-1 md:row-end-2 grid gap-5">
          <div>
            <img src={userIcon} alt="User Icon" className="size-16 m-auto" />
          </div>
          <div>Communicate with others without the language barrier</div>
        </div>
        <div className="border rounded-sm border-black p-15 md:row-start-1 md:row-end-2 grid gap-5">
          <div>
            <img src={robotIcon} alt="User Icon" className="size-16 m-auto" />
          </div>
          <div>Be more productive at work with our A.I. assistant</div>
        </div>
        <div className="border rounded-sm border-black p-15 md:row-start-1 md:row-end-2 grid gap-5">
          <div>
            <img src={bookIcon} alt="User Icon" className="size-16 m-auto" />
          </div>
          <div>Learn a langauge at the same time!</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
