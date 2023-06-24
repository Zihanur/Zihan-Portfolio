const Qualification = () => {
  return (
    <section className="mt-10 md:mt-0 min-h-screen mx-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center">Qualification</h1>
        <p className="text-xl text-center mt-2">My personal journey</p>
      </div>
      <div className=" md:flex justify-center items-center">
        <div className="w-full">
          <h1 className="text-3xl font-medium text-center mb-2">Education</h1>
          <div className="border hover:bg-base-200 rounded-xl shadow-xl p-8 transition duration-100">
            <ul className="steps steps-vertical">
              <li data-content="" className="step step-neutral">
                <div className="text-start mt-10">
                  <h1 className="text-xl font-bold">BSc in CSE</h1>
                  <p>Daffodil International University</p>
                  <p>2018-2021</p>
                </div>
              </li>
              <li data-content="" className="step step-neutral">
                <div className="text-start mt-10">
                  <h1 className="text-xl font-bold">
                    Diploma Engineering in Computer
                  </h1>
                  <p>Naogaon Polytechnic Institute</p>
                  <p>2013-2017</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider lg:divider-horizontal md:mt-10">
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-medium text-center mb-2">Courses</h1>
          <div className="border hover:bg-base-200 rounded-xl shadow-xl p-8 transition duration-100">
            <ul className="steps steps-vertical">
              <li data-content="" className="step step-neutral">
                <div className="text-start mt-10">
                  <h1 className="text-xl font-bold">
                    Web Development Full Course
                  </h1>
                  <p>Programming Hero</p>
                  <p>Dec 2022 - June 2023</p>
                </div>
              </li>
              <li data-content="" className="step step-neutral">
                <div className="text-start mt-10">
                  <h1 className="text-xl font-bold">
                    Network and System Administration with Linux & MikroTik
                  </h1>
                  <p>Daffodil Online Limited</p>
                  <p>Sep 2017 - Nov 2017</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
