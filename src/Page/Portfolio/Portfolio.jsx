import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Portfolio = () => {
  return (
    <section className="mt-10 md:mt-0 min-h-screen mx-6">
      <div className=" mb-10">
        <h1 className="text-4xl font-bold text-center">Portfolio</h1>
        <p className="text-xl text-center mt-2">Most recent work</p>
      </div>
      <div className='flex justify-center items-center'>
        <Tabs>
          <TabList className="">
            <Tab className="tab text-xl tab-active ">All</Tab>
            <Tab className="tab text-xl ">Web</Tab>
            <Tab className="tab text-xl ">App</Tab>
            <Tab className="tab text-xl">Design</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
