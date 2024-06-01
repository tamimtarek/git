import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopulerManu from "../../Home/PopulerManu/PopulerManu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  console.log(dessert, soup, salad, pizza, offered);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* Main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered Menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Menu items */}
      <MenuCategory items={dessert} title="dessert" coverImg={dessertImg}></MenuCategory>
      {/* Pizza Menu items */}
      <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>
      {/* Soup Menu items */}
      <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
      {/* Salad Menu items */}
      <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
