
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import MyGallery from "../../MyGallery/MyGallery";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";
import Qualification from "../Qualification/Qualification";


const Home = () => {
  return (
    <div className="mx-6">
      {/* Home page sections */}
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Qualification></Qualification>
      <MyGallery></MyGallery>
      <Contact></Contact>
    </div>
  );
};

export default Home;
