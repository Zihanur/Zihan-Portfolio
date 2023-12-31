import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiReactrouter,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="mt-16 md:mt-24 mx-6">
      <SectionTitle
        title={"Skills"}
        subTitle={"My technical level"}
      ></SectionTitle>
      {/* Main part of section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
        <motion.div
          whileHover={{ scale: 1.1, origin: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="border-2 border-black rounded bg-base-100 shadow-xl"
        >
          <h1 className="text-center mt-6 text-2xl font-medium">
            Frontend Development
          </h1>
          <hr className="border-1 border-black mt-1" />
          <div className="flex justify-center items-center my-6">
            <div className="grid grid-cols-2 gap-x-14 gap-y-4">
              <div className="flex gap-1">
                <div>
                  <FaHtml5 className="w-12 h-12 text-red-600"></FaHtml5>
                </div>
                <div>
                  <h1 className="text-xl font-bold">HTML</h1>
                  <p>Basic</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div>
                  <SiTailwindcss className="w-12 h-12 text-cyan-500"></SiTailwindcss>
                </div>
                <div>
                  <h1 className="text-xl font-bold ">Tailwind</h1>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div>
                  <FaCss3Alt className="w-12 h-12 text-blue-600"></FaCss3Alt>
                </div>
                <div>
                  <h1 className="text-xl font-bold">CSS</h1>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div>
                  <FaReact className="w-12 h-12 text-rose-600"></FaReact>
                </div>
                <div>
                  <h1 className="text-xl font-bold">React</h1>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div>
                  <TbBrandJavascript className="w-12 h-12 text-yellow-500"></TbBrandJavascript>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Javascript</h1>
                  <p>Advance</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <SiReactrouter className="w-10 h-12"></SiReactrouter>
                </div>
                <div>
                  <h1 className="text-xl font-bold">React Router</h1>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, origin: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="border-2 border-black rounded bg-base-100 shadow-xl"
        >
          <h1 className="text-center mt-6 text-2xl font-medium">
            Backend Development
          </h1>
          <hr className="border-1 border-black mt-1" />
          <div className="flex justify-center items-center my-6">
            <div className="grid grid-cols-2 gap-x-14 gap-y-4">
              <div className="flex gap-1">
                <div className="bg-slate-200 rounded-full">
                  <FaNodeJs className="w-12 h-12 p-2 text-green-600"></FaNodeJs>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Node JS</h1>
                  <p>Basic</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="bg-black rounded-full">
                  <SiMongodb className="w-12 h-12 p-1 text-green-600"></SiMongodb>
                </div>
                <div>
                  <h1 className="text-xl font-bold">MongoDB</h1>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="bg-slate-200 rounded-full">
                  <SiExpress className="w-12 h-12 p-2 text-black"></SiExpress>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Express JS</h1>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="bg-slate-200 rounded-full">
                  <SiFirebase className="w-12 h-12 p-2 text-amber-500"></SiFirebase>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Firebase</h1>
                  <p>Advance</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
