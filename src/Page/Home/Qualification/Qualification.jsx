import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Qualification = () => {
  return (
    <section className="mt-16 md:mt-24 lg:mt-40 lg:mb-8">
      <SectionTitle title={'Qualification'} subTitle={'My personal journey'}></SectionTitle>
      {/* Main part of section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
        <div className="w-full h-full">
          <h1 className="text-3xl font-medium text-center mb-2">Education</h1>
          <div className="border hover:bg-base-200 rounded-xl shadow-xl p-8 transition duration-100 h-80 md:h-96 lg:80">
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
        <div className="w-full h-full">
          <h1 className="text-3xl font-medium text-center mb-2">Courses</h1>
          <div className="border hover:bg-base-200 rounded-xl shadow-xl p-8 transition duration-100 h-80 md:h-96 lg:80">
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
