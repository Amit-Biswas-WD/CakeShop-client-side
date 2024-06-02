import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTIONG_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to image bb
    const imageFile = {
      image: data.image[0],
    };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <SectionTitle
        subHeading={"What,s new"}
        heading={"--- Add a items ---"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-ful my-6">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              {...register("name", { require: true })}
              required
            />
          </label>
          <div className="md:grid md:grid-cols-2 gap-6">
            {/* category */}
            <label className="form-control w-ful my-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <select
                defaultValue={"default"}
                {...register("category", { require: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={"default"}>
                  Who shot first?
                </option>
                <option value="chocolate">Chocolate</option>
                <option value="redvelvet">Red Velvet</option>
                <option value="citrus">Citrus</option>
                <option value="vegetable">Vegetable</option>
                <option value="fruit">Fruit</option>
              </select>
            </label>
            {/* price */}
            <label className="form-control w-ful my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
                {...register("price", { require: true })}
              />
            </label>
          </div>
          {/* Recipe Details */}
          <label className="form-control my-6">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              {...register("recipe")}
            ></textarea>
          </label>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">
            Add Items <FaUtensils className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
