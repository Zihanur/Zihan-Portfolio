import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const webProject = projects.filter(
    (procect) => procect.project_type == "web"
  );

  useEffect(() => {
    fetch("/public/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);

  return (
    <section className="mt-10 md:mt-24 min-h-screen mx-6">
      <div className=" mb-10">
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <p className="text-xl text-center mt-2">Most recent work</p>
      </div>
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
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
