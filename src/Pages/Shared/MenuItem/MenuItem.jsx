const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex items-center my-8 space-x-4">
      <img className="w-28 rounded-tl-3xl rounded-br-3xl" src={image} alt="" />
      <div>
        <h2 className="text-2xl">{name}</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-purple-400">$ {price}</p>
    </div>
  );
};

export default MenuItem;
