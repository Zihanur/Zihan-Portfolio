import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const zihan_twitter = "https://twitter.com/ZihanurR85119";
const zihan_youtube = "https://www.youtube.com/@zihanurrahman1985";
const zihan_facebook =
  "https://web.facebook.com/profile.php?id=100005224305899";

const Footer = () => {
  const handleTwitter = () => {
    window.open(zihan_twitter, "_blank");
  };
  const handleYoutube = () => {
    window.open(zihan_youtube, "_blank");
  };
  const handleFacebook = () => {
    window.open(zihan_facebook, "_blank");
  };

  return (
    <div>
      <hr className="my-6" />
      <div className="footer footer-center text-base-content rounded p-4">
        <div className="grid grid-flow-col gap-6 text-xl">
          <Link className="link link-hover">About</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Blog</Link>
          <Link className="link link-hover">Jobs</Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-6">
            <Link>
              <FaTwitter
                onClick={handleTwitter}
                className="w-8 h-8"
              ></FaTwitter>
            </Link>
            <Link>
              <FaYoutube
                onClick={handleYoutube}
                className="w-8 h-8"
              ></FaYoutube>
            </Link>
            <Link>
              <FaFacebookSquare
                onClick={handleFacebook}
                className="w-8 h-8"
              ></FaFacebookSquare>
            </Link>
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
