import { BsArrowUpShort, BsMouse } from "react-icons/bs";
import {
  FaArrowRight,
  FaFacebookMessenger,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";

const zihan_email = "https://mail.google.com/mail/u/0/#inbox";
const zihan_whatsapp = "https://web.whatsapp.com/";
const zihan_messenger = "https://www.facebook.com/messages/t/100008874336211/";

const Contact = () => {
  
  const handleEmail =() =>{
    window.open(zihan_email, '_blank');
  }
  const handleWhatsapp =() =>{
    window.open(zihan_whatsapp, '_blank');
  }
  const handleMessenger =() =>{
    window.open(zihan_messenger, '_blank');
  }

  return (
    <section className="mt-16 md:mt-32 lg:mt-40 mx-6">
      <div className=" mb-10">
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>
        <p className="text-xl text-center mt-2">Get in touch</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8">
        <div className="w-full">
          <h1 className="text-3xl font-medium text-center mb-8">Talk to me</h1>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="card w-96 md:w-80 lg:96 bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaMailBulk className="w-9 h-9 mb-2"></FaMailBulk>
                <h2 className="card-title">Email</h2>
                <p>zihanurrahman.cse@gmail.com</p>
                <p onClick={handleEmail} className="btn flex items-center gap-2 mt-2">
                  Write me <FaArrowRight></FaArrowRight>
                </p>
              </div>
            </div>
            <div className="card w-96 md:w-80 lg:96 bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaWhatsapp className="w-9 h-9 mb-2"></FaWhatsapp>
                <h2 className="card-title">Whatsapp</h2>
                <p>+8801704843848</p>
                <p onClick={handleWhatsapp} className="btn flex items-center gap-2 mt-2">
                  Write me <FaArrowRight></FaArrowRight>
                </p>
              </div>
            </div>
            <div className="card w-96 md:w-80 lg:96 bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaFacebookMessenger className="w-9 h-9 mb-2"></FaFacebookMessenger>
                <h2 className="card-title">Messenger</h2>
                <p>zihan.fb/892739</p>
                <p onClick={handleMessenger} className="btn flex items-center gap-2 mt-2">
                  Write me <FaArrowRight></FaArrowRight>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-medium text-center mb-6">
            Write me your project
          </h1>
          <div className="flex flex-col justify-center items-center space-y-28">
            <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card ">
                <form className="card-body">
                  <div className="form-control mb-6">
                    <label className="label">
                      <h1 className="label-text text-xl">Your Name</h1>
                    </label>
                    <input
                      type="name"
                      placeholder="Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mb-6">
                    <label className="label">
                      <h1 className="label-text text-xl">Your Email</h1>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mb-6">
                    <label className="label">
                      <h1 className="label-text text-xl">Your Project details</h1>
                    </label>
                    <textarea
                      type="text"
                      className="input input-bordered h-32"
                    />
                  </div>
                  <button className=" btn btn-active btn-neutral capitalize text-2xl font-normal mt-6">
                    Send message <TbBrandTelegram></TbBrandTelegram>
                  </button>
                </form>
              </div>
            </div>
            <button className="w-2/6 md:w-1/2 lg:w-2/6 flex items-center gap-4 text-lg border-2 border-black p-2 rounded-full shadow-md bg-base-100 capitalize sm:mb-10 md:mb-0">
                <BsMouse></BsMouse> <span>Scroll Up</span>{" "}
                <BsArrowUpShort></BsArrowUpShort>
              </button>
        </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
