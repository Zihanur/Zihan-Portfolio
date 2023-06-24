import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";
import Qualification from "../Qualification/Qualification";


const Home = () => {
  return (
    <div>
      {/* Home page sections */}
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Qualification></Qualification>
    </div>
  );
};

export default Home;
