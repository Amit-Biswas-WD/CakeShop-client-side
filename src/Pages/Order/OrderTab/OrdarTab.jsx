import CakeCard from "../../../Components/CakeCard/CakeCard";

const OrdarTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10 my-10">
      {items.map((item) => (
        <CakeCard key={item._id} item={item}></CakeCard>
      ))}
    </div>
  );
};

export default OrdarTab;
