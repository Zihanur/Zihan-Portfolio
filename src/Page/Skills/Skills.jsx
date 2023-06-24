const Skills = () => {
  return (
    <section className="mt-10 md:mt-0 min-h-screen mx-6">
      <div className=" mb-10">
        <h1 className="text-4xl font-bold text-center">Skills</h1>
        <p className="text-xl text-center mt-2">My technical level</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
        <div className="border-2 border-black rounded bg-base-100 shadow-xl">
          <h1 className="text-center mt-6 text-2xl font-medium">
            Frontend Development
          </h1>
          <hr className="border-1 border-black mt-1"/>
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
          <hr className="border-1 border-black mt-1"/>
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
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
