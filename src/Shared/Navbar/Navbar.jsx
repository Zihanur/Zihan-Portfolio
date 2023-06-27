import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navbarOptions = (
    <>
      <li className="text-slate-700 hover:text-black hover:underline">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="text-slate-700 hover:text-black hover:underline">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="text-slate-700 hover:text-black hover:underline">
        <Link to={"/skills"}>Skills</Link>
      </li>
      <li className="text-slate-700 hover:text-black hover:underline">
        <Link to={"/projects"}>Projects</Link>
      </li>
      <li className="text-slate-700 hover:text-black hover:underline">
        <Link to={"/contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 my-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarOptions}
            </ul>
          </div>
          <Link to={"/"}>
            <motion.button
              className="text-slate-700 text-4xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 4 }}
            >
              ZIHAN
            </motion.button>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex md:gap-4 lg:gap-6 px-1 text-2xl">
            {navbarOptions}
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
