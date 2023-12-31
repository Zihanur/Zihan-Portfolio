import {
  FaArrowRight,
  FaFacebookMessenger,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";
import ContactMessage from "./ContactMessage";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const zihan_email = "mailto:zrahman04.cse@gmail.com";
const zihan_whatsapp = "https://wa.me/01704843848";
const zihan_messenger =
  "https://web.facebook.com/profile.php?id=100005224305899";

const Contact = () => {
  const handleEmail = () => {
    window.open(zihan_email, "_blank");
  };
  const handleWhatsapp = () => {
    window.open(zihan_whatsapp, "_blank");
  };
  const handleMessenger = () => {
    window.open(zihan_messenger, "_blank");
  };

  return (
    <section className="mt-16 md:mt-24">
      <SectionTitle
        title={"Contact Me"}
        subTitle={"Get in touch"}
      ></SectionTitle>
      {/* Main part of section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8 mx-10">
        <div className="w-full">
          <h1 className="text-3xl font-medium text-center mb-8">Talk to me</h1>
          <div className="flex flex-col justify-center items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="card w-96 md:w-80 lg:96 bg-base-100 shadow-xl"
            >
              <div className="card-body items-center text-center">
                <FaMailBulk className="w-9 h-9 mb-2"></FaMailBulk>
                <h2 className="card-title">Email</h2>
                <p>zihanurrahman.cse@gmail.com</p>
                <p
                  onClick={handleEmail}
                  className="btn flex items-center gap-2 mt-2"
                >
                  Write me <FaArrowRight></FaArrowRight>
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="card w-96 md:w-80 lg:96 bg-base-100 shadow-xl"
            >
              <div className="card-body items-center text-center">
                <FaWhatsapp className="w-9 h-9 mb-2"></FaWhatsapp>
                <h2 className="card-title">Whatsapp</h2>
                <p>+8801704843848</p>
                <p
                  onClick={handleWhatsapp}
                  className="btn flex items-center gap-2 mt-2"
                >
                  Write me <FaArrowRight></FaArrowRight>
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="card w-96 md:w-80 lg:96 bg-base-100 shadow-xl"
            >
              <div className="card-body items-center text-center">
                <FaFacebookMessenger className="w-9 h-9 mb-2"></FaFacebookMessenger>
                <h2 className="card-title">Messenger</h2>
                <p>fb.com/my-profile</p>
                <p
                  onClick={handleMessenger}
                  className="btn flex items-center gap-2 mt-2"
                >
                  Write me <FaArrowRight></FaArrowRight>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <ContactMessage></ContactMessage>
      </div>
    </section>
  );
};

export default Contact;
