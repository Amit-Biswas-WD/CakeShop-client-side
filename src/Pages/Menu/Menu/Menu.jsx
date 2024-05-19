import { Helmet } from "react-helmet-async";
// import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useHooks";
// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
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
        <title>Cake | Menu</title>
      </Helmet>
      {/* <Cover
        img={"https://i.ibb.co/FWGTzTW/download.jpg"}
        title={"Our Menu"}
      ></Cover> */}
      {/* <SectionTitle
        subHeading={"TODAY'S OFFER"}
        heading={"Do not miss"}
      ></SectionTitle> */}
      <MenuCategory
        items={chocolate}
        title={"Chocolate"}
        img={"https://i.ibb.co/0BGgP9n/1600w-1-QK0-IS-7s-D0.webp"}
      ></MenuCategory>
      <MenuCategory
        items={vanilla}
        title={"Vegetable"}
        img={"https://i.ibb.co/SBTJpxN/images.jpg"}
      ></MenuCategory>
      <MenuCategory
        items={redVelvet}
        title={"Vanilla"}
        img={"https://i.ibb.co/74nLcQQ/1600w-1-QK0-IS-7s-D0.webp"}
      ></MenuCategory>
      <MenuCategory
        items={citrus}
        title={"Red Velvet"}
        img={"https://i.ibb.co/3FgrQ56/image5.jpg"}
      ></MenuCategory>
      <MenuCategory
        items={vegetable}
        title={"Citrus"}
        img={"https://i.ibb.co/W5Y84X9/image4.jpg"}
      ></MenuCategory>
      <MenuCategory
        items={fruit}
        title={"Fruit"}
        img={"https://i.ibb.co/Yyt0VYW/images-1.jpg"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
