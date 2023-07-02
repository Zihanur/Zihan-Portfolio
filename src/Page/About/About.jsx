import { GiAchievement } from "react-icons/gi";
import { BsBagFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import DownloadCV from "./DownloadCV";
import { motion } from "framer-motion";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <section className="mt-16 md:mt-24">
      <SectionTitle
        title={"About Me"}
        subTitle={"My Introduction"}
      ></SectionTitle>
      {/* Main part of section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <img
            className="mask mask-squircle filter grayscale mb-6 md:mb-0"
            src="https://i.ibb.co/47vVhb5/about.jpg"
          />
        </div>
        <div className="mx-4">
          <div className="flex space-x-4">
            <motion.div
              whileHover={{ scale: 1.1, fontWeight: "bold" }}
              className="text-center p-4 rounded-3xl bg-base-200 card shadow-xl w-full flex flex-col gap-3"
            >
              <div className="w-full">
                <GiAchievement className="text-3xl mx-auto"></GiAchievement>
              </div>
              <h1 className="text-2xl">Experience</h1>
              <p>1 Years</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fontWeight: "bold" }}
              className="text-center p-4 rounded-3xl bg-base-200 card shadow-xl w-full flex flex-col gap-3"
            >
              <div className="w-full">
                <BsBagFill className="text-3xl mx-auto"></BsBagFill>
              </div>
              <h1 className="text-2xl">Projects</h1>
              <p>20+</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fontWeight: "bold" }}
              className="text-center p-4 rounded-3xl bg-base-200 card shadow-xl w-full flex flex-col gap-3"
            >
              <div className="w-full">
                <MdSupportAgent className="text-3xl mx-auto"></MdSupportAgent>
              </div>
              <h1 className="text-2xl">Support</h1>
              <p>Online 24/7</p>
            </motion.div>
          </div>
          <p className="my-14 text-xl text-slate-700 text-justify">
            I am Junior Web Developer. I created user-friendly and responsive
            site with React. I completed{" "}
            <span className="font-semibold">Web Development Full Course</span>{" "}
            training in 6 months. Comfortable with React, React Router,
            JavaScript ES6, Node JS, Express JS, MongoDB, Firebase Tailwind CSS.
          </p>
          <div className="flex justify-center md:justify-start">
            <DownloadCV></DownloadCV>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
