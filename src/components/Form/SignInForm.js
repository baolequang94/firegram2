import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ImArrowRight2 } from "react-icons/im";
import { FaGoogle, FaFacebookF, FaTwitter, FaSlash } from "react-icons/fa";
import FirebaseContext from "../../context/firebase";
import { toggleShowPassword } from "../../helpers";
import * as ROUTES from "../../constants/ROUTES";

const SignInForm = () => {
  const history = useHistory();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isDisabledLogin = email === "" || password === "";

  const { firebase } = useContext(FirebaseContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
      setTimeout(() => setError(""), 10000);
    }
  };

  const handleLoginTest = async (e) => {
    e.preventDefault();

    await firebase
      .auth()
      .signInWithEmailAndPassword("firegram@gmail.com", "firegram");
    history.push(ROUTES.DASHBOARD);
  };

  return (
    <>
      <div className="flex items-center justify-center mb-16 text-gray-100 h-full">
        <form className="flex flex-col w-96 relative">
          <div className="flex relative mb-4 bg-dark-250 rounded-md">
            <input
              className="w-full h-16 p-4 pr-0 bg-transparent placeholder-lightGray-750 font-medium text-lightGray-250 outline-none"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="flex items-center p-5">
              <FiMail className="text-lightGray-250 text-xl" />
            </div>
          </div>
          <div className="flex relative mb-4 bg-dark-250 rounded-md password-container">
            <input
              className="w-full h-16 p-4 pr-0 bg-transparent placeholder-lightGray-750 font-medium text-lightGray-250 outline-none"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="cursor-pointer flex items-center p-5"
              onClick={(e) => toggleShowPassword(e, setIsShowPassword)}
            >
              {isShowPassword ? (
                <BsEyeSlash className="text-lightGray-250 text-xl outline-none" />
              ) : (
                <BsEye className="text-lightGray-250 text-xl outline-none" />
              )}
            </div>
          </div>
          <button
            className={`${
              isDisabledLogin ? "opacity-50 cursor-auto" : ""
            } text-white h-16 px-6 flex items-center justify-between font-medium rounded-md bg-gradient-to-tr from-linear-1 via-linear-2 to-linear-3 transition-opacity duration-500 ease-in-out active:opacity-70 outline-none focus:outline-none`}
            type="submit"
            disabled={isDisabledLogin}
            onClick={handleLogin}
          >
            <span>Login to Your Account</span>
            <ImArrowRight2 className="text-2xl" />
          </button>

          <div className="absolute -bottom-6 w-full text-red-500 text-sm">
            {error}
          </div>
        </form>
        <div className="text-white p-8 flex items-center">
          <FaSlash className="transform rotate-90 text-xl text-lightGray-750" />
        </div>
        <div className="flex flex-col w-96">
          <button
            className="w-full h-16 mb-4 outline-none active:opacity-70 focus:outline-none text-gray-100 border border-linear-1 rounded-md flex items-center hover:bg-linear-1 transition-all duration-500 ease-in-out "
            type="submit"
            onClick={handleLoginTest}
          >
            <div className="p-5 flex items-center">
              <FaGoogle className="text-xl" />
            </div>
            <span>
              Sign in as{" "}
              <span className="font-bold">Firegram Test Account</span>
            </span>
          </button>

          <button
            className="w-full h-16 mb-4 outline-none active:opacity-70 focus:outline-none text-gray-100 border border-linear-2 rounded-md flex items-center hover:bg-linear-2 transition-all duration-500 ease-in-out"
            type="submit"
          >
            <div className="p-5 flex items-center">
              <FaFacebookF className="text-xl" />
            </div>
            <span>Sign in with Facebook</span>
          </button>
          <button
            className="w-full h-16 outline-none active:opacity-70 focus:outline-none text-gray-100 border border-linear-3 rounded-md flex items-center hover:bg-linear-3 transition-all duration-500 ease-in-out"
            type="submit"
          >
            <div className="p-5 flex items-center">
              <FaTwitter className="text-xl" />
            </div>
            <span>Sign in with Twitter</span>
          </button>
        </div>
      </div>
      <div className="text-white flex items-center justify-center">
        <Link to={ROUTES.SIGN_UP} className="underline">
          Don't have an account?
        </Link>
      </div>
    </>
  );
};

export default SignInForm;
