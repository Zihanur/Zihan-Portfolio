import { FaFacebookSquare, FaHandshake, FaLinkedin } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { BsArrowDownShort, BsMouse } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import { motion } from "framer-motion";
import "./Banner.css";

const zihan_github = "https://github.com/Zihanur";
const zihan_facebook =
  "https://web.facebook.com/profile.php?id=100005224305899";
const zihan_linkdin = "https://www.linkedin.com/in/zihanur-rahman-877597184/";

const Banner = () => {
  const handleGithub = () => {
    window.open(zihan_github, "_blank");
  };
  const handleFacebook = () => {
    window.open(zihan_facebook, "_blank");
  };
  const handleLinkdin = () => {
    window.open(zihan_linkdin, "_blank");
  };

  return (
    <>
      <section className="mt-16 md:mt-24 md:mb-8 mx-6">
        <div className="grid grid-cols-1 md:grid-cols-7">
          <div className="col-span-1 flex md:flex-col gap-8 text-2xl justify-center  sm:mb-10 md:mb-0">
            <Link onClick={handleGithub}>
              <motion.button whileHover={{ scale: 1.4 }}>
                <LuGithub></LuGithub>
              </motion.button>
            </Link>
            <Link onClick={handleFacebook}>
              <motion.button whileHover={{ scale: 1.4 }}>
                <FaFacebookSquare></FaFacebookSquare>
              </motion.button>
            </Link>
            <Link onClick={handleLinkdin}>
              <motion.button whileHover={{ scale: 1.4 }}>
                <FaLinkedin></FaLinkedin>
              </motion.button>
            </Link>
          </div>
          <div className="col-span-3 mt-4 md:mt-0">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
              className="flex items-center justify-center md:justify-start gap-4 text-4xl lg:text-5xl font-bold"
            >
              <h1>Zihanur Rahman</h1>
              <FaHandshake className="text-teal-600"></FaHandshake>
            </motion.div>
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 20 }}
              className="text-2xl my-6 text-center md:text-start"
            >
              ----------------- React Developer
            </motion.p>
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 20 }}
              className="text-base text-slate-600 mb-10 text-center md:text-start"
            >
              I am Junior Developer. I am very passionate and dedicated to my
              work. Hire me...
            </motion.p>
            <div className="flex sm:flex md:flex-col gap-6 md:gap-24">
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

              <div className="w-40 flex items-center gap-4 md:text-lg border-2 border-black p-2 rounded-full shadow-md bg-base-100 capitalize sm:mb-10 md:mb-0">
                <BsMouse></BsMouse> <span>Scroll</span>{" "}
                <BsArrowDownShort></BsArrowDownShort>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 20 }}
            style={{ width: "300px", height: "300px" }}
            className="profileImg col-span-3 bg-[url('https://i.ibb.co/0FBbBGL/profile.jpg')] bg-cover bg-center justify-center order-1 mx-auto w-full mt-6 md:mt-0"
          ></motion.div>
        </div>
      </section>
    </>
  );
};

export default Banner;
