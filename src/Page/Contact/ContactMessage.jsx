import { BsArrowUpShort, BsMouse } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

const ContactMessage = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-medium text-center mb-6">
        Write me your project
      </h1>
      <div className="flex flex-col justify-center items-center space-y-28">
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card ">
            <form
              action="https://formspree.io/f/mzblpdwz"
              method="POST"
              className="card-body"
            >
              <div className="form-control mb-6">
                <label className="label">
                  <h1 className="label-text text-xl">Your Name</h1>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <h1 className="label-text text-xl">Your Email</h1>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <h1 className="label-text text-xl">Your Project details</h1>
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="input input-bordered h-32"
                  autoComplete="off"
                  required
                />
              </div>
              <button
                type="submit"
                className=" btn btn-active btn-neutral capitalize text-2xl font-normal mt-6"
              >
                Send message <TbBrandTelegram></TbBrandTelegram>
              </button>
            </form>
          </div>
        </div>
        <button
          onClick={handleTop}
          className="w-44 flex items-center gap-4 text-lg border-2 border-black p-2 rounded-full shadow-md bg-base-100 capitalize sm:mb-10 md:mb-0"
        >
          <BsMouse></BsMouse> <span>Scroll Up</span>{" "}
          <BsArrowUpShort></BsArrowUpShort>
        </button>
      </div>
    </div>
  );
};

export default ContactMessage;
