import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Page/Home/Home/Home";
import About from "../Page/About/About";
import Skills from "../Page/Skills/Skills";
import Portfolio from "../Page/Portfolio/Portfolio";
import Contact from "../Page/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ],
  },
]);

export default router;
