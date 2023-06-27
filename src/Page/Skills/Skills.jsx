import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Skills = () => {
  return (
    <section className="mt-16 md:mt-24">
      <Helmet>
        <title>Skills | Zihan Portfolio</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
      <SectionTitle
        title={"Skills"}
        subTitle={"My technical level"}
      ></SectionTitle>
      {/* Main part of section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
        <div className="border-2 border-black rounded bg-base-100 shadow-xl">
          <h1 className="text-center mt-6 text-2xl font-medium">
            Frontend Development
          </h1>
          <hr className="border-1 border-black mt-1" />
          <div className="flex justify-center items-center my-6">
            <div className="grid grid-cols-2 gap-x-14 gap-y-4">
              <div>
                <h1 className="text-xl font-bold">HTML</h1>
                <p>Basic</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">Tailwind</h1>
                <p>Intermediate</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">CSS</h1>
                <p>Intermediate</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">React</h1>
                <p>Intermediate</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">Javascript</h1>
                <p>Advance</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">React Router</h1>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-black rounded bg-base-100 shadow-xl">
          <h1 className="text-center mt-6 text-2xl font-medium">
            Backend Development
          </h1>
          <hr className="border-1 border-black mt-1" />
          <div className="flex justify-center items-center my-6">
            <div className="grid grid-cols-2 gap-x-14 gap-y-4">
              <div>
                <h1 className="text-xl font-bold">Node JS</h1>
                <p>Basic</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">MongoDB</h1>
                <p>Intermediate</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">Express JS</h1>
                <p>Intermediate</p>
              </div>
              <div>
                <h1 className="text-xl font-bold">Firebase</h1>
                <p>Advance</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
