import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        const userInFo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic
          .post("/users", userInFo)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="py-2 mx-auto">
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
