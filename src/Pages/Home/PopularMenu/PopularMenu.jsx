import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useHooks";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const coffee = menu.filter((item) => item.category === "Coffee");

  return (
    <section className="my-20">
      <SectionTitle
        subHeading="FROM OUR MENU"
        heading="---Check it out---"
      ></SectionTitle>
      <h2 className="text-4xl">Total data {menu.length}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {coffee.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
