import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const CakeCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCard = () => {
    if (user && user.email) {
      //send card item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your card`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch card to item update the card item count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the card.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login.",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };

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
          <button
            onClick={handleAddToCard}
            className="btn glass text-white bg-purple-700 hover:bg-black"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
