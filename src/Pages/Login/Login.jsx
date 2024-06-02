import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthContextProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "LogIn SuccessFul.",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleCaptchaChange = (e) => {
    const user_Captcha_Value = e.target.value;
    if (validateCaptcha(user_Captcha_Value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cake || Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <img
              className="my-8"
              src="https://i.ibb.co/dkH9Ldk/authentication1.png"
              alt=""
            />
          </div>
          <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100 w-full">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleCaptchaChange}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  required
                />
                <button className="btn glass btn-xs my-4 text-white bg-purple-700 hover:bg-black">
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  // TODO: apply disabled for me captcha
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className="px-6 py-2">
              New here?
              <Link to="/signup">
                <span className="text-violet-500 ml-4 text-xl">
                  Create a New Account
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
