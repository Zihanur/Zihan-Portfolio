
import { Helmet } from "react-helmet-async";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";
import Qualification from "../Qualification/Qualification";


const Home = () => {
  return (
    <div className="mx-6">
      <Helmet>
        <title>Home | Zihan Portfolio</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
      {/* Home page sections */}
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Qualification></Qualification>
      <Contact></Contact>
    </div>
  );
};

export default Home;
