import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";


const Home = () => {
  return (
    <div>
      {/* Home page sections */}
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
    </div>
  );
};

export default Home;
