const CakeCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt="Shoes" />
      </figure>
      <p className="text-violet-800 bg-white rounded-md px-4 text-xl font-bold absolute mr-4 right-0 mt-4">
        {price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
