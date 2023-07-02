import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Project from "./Project";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const webProject = projects.filter(
    (procect) => procect.project_type == "web"
  );

  const server_Url = "https://zihan-portfolio-server.vercel.app/projects";
  const local_Url = "/public/projects.json";

  useEffect(() => {
    fetch(local_Url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);

  return (
    <section className="mt-10 md:mt-10 min-h-screen mx-6">
      <SectionTitle
        title={"Projects"}
        subTitle={"Most recent work"}
      ></SectionTitle>
      <div className="flex justify-center items-center">
        <Tabs>
          <TabList className="font-bold">
            <Tab className="tab text-2xl">All</Tab>
            <Tab className="tab text-2xl">Web</Tab>
            <Tab className="tab text-2xl">App</Tab>
            <Tab className="tab text-2xl">Design</Tab>
          </TabList>

          <TabPanel>
            <div className="border p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Project key={project.id} project={project}></Project>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="border p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProject.map((project) => (
                <Project key={project.id} project={project}></Project>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>TODO</h2>
          </TabPanel>
          <TabPanel>
            <h2>TODO</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
