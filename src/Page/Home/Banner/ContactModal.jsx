import { TbBrandTelegram } from "react-icons/tb";

const ContactModal = () => {
  return (
    <div className="card ">
          <form
            method="POST"
            className="modal-box card-body"
            action="https://formspree.io/f/mzblpdwz"
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
  );
};

export default ContactModal;
