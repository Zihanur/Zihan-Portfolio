import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <hr className="my-6"/>
      <div className="footer footer-center bg-base-100 text-base-content rounded p-4">
        <div className="grid grid-flow-col gap-6 text-xl">
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-6">
            <Link><FaTwitter className="w-10 h-10 text-blue-500"></FaTwitter></Link>
            <Link><FaYoutube className="w-10 h-10 text-red-600"></FaYoutube></Link>
            <Link><FaFacebookSquare className="w-10 h-10 text-blue-800"></FaFacebookSquare></Link>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by zihan.web</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
