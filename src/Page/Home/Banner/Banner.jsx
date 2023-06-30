import { FaHandshake, FaLinkedin } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { BsArrowDownShort, BsMouse } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import { motion } from "framer-motion";

const zihan_github = "https://github.com/Zihanur";
const zihan_website = "TODO";
const zihan_linkdin = "https://www.linkedin.com/in/zihanur-rahman-877597184/";

const Banner = () => {
  const handleGithub = () => {
    window.open(zihan_github, "_blank");
  };
  const handleWebsite = () => {
    window.open(zihan_website, "_blank");
  };
  const handleLinkdin = () => {
    window.open(zihan_linkdin, "_blank");
  };

  return (
    <>
      <section className="mt-16 md:mt-24 md:mb-8">
        <div className="grid grid-cols-1 md:grid-cols-7">
          <div className="col-span-1 flex md:flex-col gap-8 text-2xl justify-center  sm:mb-10 md:mb-0">
            <Link onClick={handleGithub}>
              <motion.button whileHover={{ scale: 1.4 }}>
                <LuGithub></LuGithub>
              </motion.button>
            </Link>
            <Link onClick={handleWebsite}>
              <motion.button whileHover={{ scale: 1.4 }}>
                <BsGlobe></BsGlobe>
              </motion.button>
            </Link>
            <Link onClick={handleLinkdin}>
              <motion.button whileHover={{ scale: 1.4 }}>
                <FaLinkedin></FaLinkedin>
              </motion.button>
            </Link>
          </div>
          <div className="col-span-3">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
              className="flex items-center gap-4 text-6xl font-bold"
            >
              <h1>Zihanur Rahman</h1>
              <FaHandshake className="text-teal-600"></FaHandshake>
            </motion.div>
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 20 }}
              className="text-4xl my-6"
            >
              ----------------- React Developer
            </motion.p>
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 20 }}
              className="text-xl text-slate-600 mb-10"
            >
              I am Junior Developer. I am very passionate and dedicated to my
              work. Hire me...
            </motion.p>
            <div className="flex sm:flex md:flex-col gap-16 md:gap-32">
              {/* say hello btn with dialog modal */}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 5px rgb(255,255,255)",
                }}
                onClick={() => window.my_modal_2.showModal()}
                className="w-2/4 btn rounded-full btn-neutral capitalize text-xl"
              >
                Say Hello <TbBrandTelegram></TbBrandTelegram>
              </motion.button>
              <dialog id="my_modal_2" className="modal">
                <form
                  method="POST"
                  className="modal-box bg-base-200"
                  action="https://formspree.io/f/mzblpdwz"
                >
                  <ContactModal></ContactModal>
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              <div className="w-2/6 md:w-1/2 lg:w-2/6 flex items-center gap-4 text-lg border-2 border-black p-2 rounded-full shadow-md bg-base-100 capitalize sm:mb-10 md:mb-0">
                <BsMouse></BsMouse> <span>Scroll Down</span>{" "}
                <BsArrowDownShort></BsArrowDownShort>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <motion.img
              initial={{ x: "+100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 20 }}
              className="mask mask-squircle filter grayscale"
              src="https://i.ibb.co/frD3QFP/banner.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
