import {
  FaArrowRight,
  FaFacebookMessenger,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";

const Contact = () => {
  return (
    <section className="mt-10 md:mt-0 mx-6">
      <div className=" mb-10">
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>
        <p className="text-xl text-center mt-2">Get in touch</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <h1 className="text-3xl font-medium text-center mb-8">Talk to me</h1>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaMailBulk className="w-9 h-9 mb-2"></FaMailBulk>
                <h2 className="card-title">Email</h2>
                <p>zihanurrahman.cse@gmail.com</p>
                <p className="btn flex items-center gap-2 mt-2">
                  Write me <FaArrowRight></FaArrowRight>
                </p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaWhatsapp className="w-9 h-9 mb-2"></FaWhatsapp>
                <h2 className="card-title">Whatsapp</h2>
                <p>+8801704843848</p>
                <p className="btn flex items-center gap-2 mt-2">
                  Write me <FaArrowRight></FaArrowRight>
                </p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaFacebookMessenger className="w-9 h-9 mb-2"></FaFacebookMessenger>
                <h2 className="card-title">Messenger</h2>
                <p>zihan.fb/892739</p>
                <p className="btn flex items-center gap-2 mt-2">
                  Write me <FaArrowRight></FaArrowRight>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2">
          <h1 className="text-2xl font-medium text-center mb-6">
            Write me your project
          </h1>
          <div className="flex flex-col justify-center items-center">
            <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card ">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="name"
                      placeholder="Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Project details</span>
                    </label>
                    <textarea
                      type="text"
                      className="input input-bordered h-24"
                    />
                  </div>
                  <button className=" btn btn-active btn-neutral capitalize text-xl font-normal mt-6">
                    Send message <TbBrandTelegram></TbBrandTelegram>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
