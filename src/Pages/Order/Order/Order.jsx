import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { driver } from "localforage";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="space-y-8">
    <Helmet>
      <title>Bistro Boos | Order</title>
    </Helmet>
      <Cover img={orderCover} title="order food"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
