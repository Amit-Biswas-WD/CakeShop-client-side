import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useHooks";
import OrdarTab from "../OrderTab/OrdarTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = [
    "Chocolate",
    "Vanilla",
    "Red Velvet",
    "Citrus",
    "Vegetable",
    "Fruit",
  ];
  const { category } = useParams();
  const initialsIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialsIndex);
  const [menu] = useMenu();

  const chocolate = menu.filter((iten) => iten.category === "Chocolate");
  const vanilla = menu.filter((iten) => iten.category === "Vanilla");
  const redVelvet = menu.filter((iten) => iten.category === "Red Velvet");
  const citrus = menu.filter((iten) => iten.category === "Citrus");
  const vegetable = menu.filter((iten) => iten.category === "Vegetable");
  const fruit = menu.filter((iten) => iten.category === "Fruit");

  return (
    <div>
      <Helmet>
        <title>Cake | Order Food</title>
      </Helmet>
      <Cover
        img={"https://i.ibb.co/WV2H0QJ/download-1.jpg"}
        title={"OUR SHOP"}
      ></Cover>
      <div className="my-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Chocolate</Tab>
            <Tab>Vanilla</Tab>
            <Tab>Red Velvet</Tab>
            <Tab>Citrus</Tab>
            <Tab>Vegetable</Tab>
            <Tab>Fruit</Tab>
          </TabList>
          <TabPanel>
            <OrdarTab items={chocolate}></OrdarTab>
          </TabPanel>
          <TabPanel>
            <OrdarTab items={vanilla}></OrdarTab>
          </TabPanel>
          <TabPanel>
            <OrdarTab items={redVelvet}></OrdarTab>
          </TabPanel>
          <TabPanel>
            <OrdarTab items={citrus}></OrdarTab>
          </TabPanel>
          <TabPanel>
            <OrdarTab items={vegetable}></OrdarTab>
          </TabPanel>
          <TabPanel>
            <OrdarTab items={fruit}></OrdarTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
