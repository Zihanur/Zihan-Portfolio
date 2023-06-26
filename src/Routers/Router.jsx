import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Page/Home/Home/Home";
import About from "../Page/About/About";
import Skills from "../Page/Skills/Skills";
import Contact from "../Page/Contact/Contact";
import Projects from "../Page/Projects/Projects";

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
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ],
  },
]);

export default router;
