import { FaHandshake, FaLinkedin } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { BsArrowDownShort, BsMouse } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";

const zihan_github = "https://github.com/Zihanur";
const zihan_website = "TODO";
const zihan_linkdin = "https://www.linkedin.com/in/zihanur-rahman-877597184/";

const Banner = () => {

  const handleGithub =() =>{
    window.open(zihan_github, '_blank');
  }
  const handleWebsite =() =>{
    window.open(zihan_website, '_blank');
  }
  const handleLinkdin =() =>{
    window.open(zihan_linkdin, '_blank');
  }
  
  return (
    <>
      <section className="mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-7">
          <div className="col-span-1 flex md:flex-col gap-8 text-2xl justify-center  sm:mb-10 md:mb-0">
            <Link onClick={handleGithub}>
              <LuGithub></LuGithub>
            </Link>
            <Link onClick={handleWebsite}>
              <BsGlobe></BsGlobe>
            </Link>
            <Link onClick={handleLinkdin}>
              <FaLinkedin></FaLinkedin>
            </Link>
          </div>
          <div className="col-span-3">
            <div className="flex items-center gap-4 text-6xl font-bold">
              <h1>Zihanur Rahman</h1>
              <FaHandshake className="text-teal-600"></FaHandshake>
            </div>
            <p className="text-4xl my-6">----------------- React Developer</p>
            <p className="text-xl text-slate-600 mb-10">
              I am Junior Developer. I am very passionate and dedicated to my
              work. Hire me...
            </p>
            <div className="flex sm:flex md:flex-col gap-16 md:gap-32">
              <button className="w-2/4 btn btn-active btn-neutral capitalize text-xl">
                Say Hello <TbBrandTelegram></TbBrandTelegram>
              </button>
              <button className="w-2/6 md:w-1/2 lg:w-2/6 flex items-center gap-4 text-lg border-2 border-black p-2 rounded-full shadow-md bg-base-100 capitalize sm:mb-10 md:mb-0">
                <BsMouse></BsMouse> <span>Scroll Down</span>{" "}
                <BsArrowDownShort></BsArrowDownShort>
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <img
              className="mask mask-squircle filter grayscale"
              src="https://i.ibb.co/N104v60/IMG-9060.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;