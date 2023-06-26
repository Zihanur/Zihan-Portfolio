import { FaArrowAltCircleRight } from "react-icons/fa";

const Project = ({ project }) => {
  const { project_name, img } = project;
  return (
    <>
      <div className="card w-full glass">
        <figure className="h-full">
          <img src={img} className="rounded-md p-4" alt="project" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{project_name}</h2>
          <div className="card-actions justify-end">
            <button className="flex items-center gap-4 text-lg font-normal btn btn-outline rounded-full shadow-md bg-base-100 capitalize ">
              More details <FaArrowAltCircleRight></FaArrowAltCircleRight>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
