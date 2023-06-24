import { GiAchievement } from "react-icons/gi";
import { BsBagFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import DownloadCV from "./DownloadCV";

const About = () => {
  return (
    <section className="mt-10 md:mt-20 min-h-screen mx-6">
      <div className=" mb-10">
        <h1 className="text-4xl font-bold text-center">About Me</h1>
        <p className="text-xl text-center mt-2">My Introduction</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="sm:order-1 md:-order-1 sm:my-10">
          <img
            className="mask mask-hexagon filter grayscale"
            src="https://i.ibb.co/DtR8sZ9/IMG-1763.jpg"
          />
        </div>
        <div className="">
          <div className="flex space-x-4">
            <div className="text-center p-4 rounded-3xl bg-base-200 card shadow-xl w-full flex flex-col gap-3">
              <div className="w-full">
                <GiAchievement className="text-3xl mx-auto"></GiAchievement>
              </div>
              <h1 className="text-2xl">Experience</h1>
              <p>1 Years</p>
            </div>
            <div className="text-center p-4 rounded-3xl bg-base-200 card shadow-xl w-full flex flex-col gap-3">
              <div className="w-full">
                <BsBagFill className="text-3xl mx-auto"></BsBagFill>
              </div>
              <h1 className="text-2xl">Projects</h1>
              <p>40+</p>
            </div>
            <div className="text-center p-4 rounded-3xl bg-base-200 card shadow-xl w-full flex flex-col gap-3">
              <div className="w-full">
                <MdSupportAgent className="text-3xl mx-auto"></MdSupportAgent>
              </div>
              <h1 className="text-2xl">Support</h1>
              <p>Online 24/7</p>
            </div>
          </div>
          <p className="my-14 text-xl text-slate-500 text-justify">
            Junior Web Developer, I created web pages with UI. I completed 6
            months traning web development full course. Comfortable with React,
            ES6, Express JS, MongoDB, Tailwind CSS
          </p>
          <DownloadCV></DownloadCV>
        </div>
      </div>
    </section>
  );
};

export default About;
