import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
// import CakeShop from "../CakeShop/CakeShop";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import TestiMonial from "../TestiMonial/TestiMonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Cake || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      {/* <CakeShop></CakeShop> */}
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <TestiMonial></TestiMonial>
    </div>
  );
};

export default Home;
