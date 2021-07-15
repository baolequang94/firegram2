import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

// import { Link } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiUser, FiMail, FiPlus } from "react-icons/fi";

import { GrTextAlignFull } from "react-icons/gr";
import { RiUserAddLine } from "react-icons/ri";
import FirebaseContext from "../../context/firebase";
import { toggleShowPassword } from "../../helpers";

import * as ROUTES from "../../constants/ROUTES";

const SignUpForm = () => {
  const history = useHistory();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordConfirm, setIsShowPasswordConfirm] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [error, setError] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await firebase
        .firestore()
        .collection("users")
        .add({
          userId: createdUser.user.uid,
          email,
          followers: [],
          followings: ["IUjS5JhnnFXoqJQT9tLqka7faCK2"],
          name: fullname,
          username,
          profileSrc: "",
        });

      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setError(error.message);
      setUsername("");
      setPassword("");
      setPasswordConfirm("");
      setEmail("");
      setFullname("");
    }
  };

  const isDisabledLogin =
    username === "" ||
    password === "" ||
    passwordConfirm === "" ||
    fullname === "" ||
    email === "";

  return (
    <>
      <div className="flex items-center justify-center mb-16 text-gray-100 h-full">
        <form className="flex flex-col w-96">
          <div className="flex relative mb-4 bg-dark-250 rounded-md">
            <input
              className="w-full h-16 p-4 pr-0 bg-transparent placeholder-lightGray-750 font-medium text-lightGray-250 outline-none"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="flex relative bg-dark-250 rounded-md">
            <input
              className="w-full h-16 p-4 pr-0 bg-transparent placeholder-lightGray-750 font-medium text-lightGray-250 outline-none"
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <div className="flex items-center p-5">
              <GrTextAlignFull className="text-lightGray-250 text-xl" />
            </div>
          </div>
        </form>
        <div className="text-white p-8 flex items-center">
          <FiPlus className="transform rotate-90 text-xl text-lightGray-750" />
        </div>
        <div className="flex flex-col w-96 justify-center relative">
          {/* <button
            className="w-full h-16 mb-4 outline-none active:opacity-70 focus:outline-none text-gray-100 border border-linear-1 rounded-md flex items-center hover:bg-linear-1 transition-all duration-500 ease-in-out "
            type="submit"
          >
            <div className="p-5 flex items-center">
              <FaGoogle className="text-xl" />
            </div>
            <span>Sign in with Google</span>
          </button> */}

          <div className="flex relative mb-4 bg-dark-250 rounded-md">
            <input
              className="w-full h-16 p-4 pr-0 bg-transparent placeholder-lightGray-750 font-medium text-lightGray-250 outline-none"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="flex items-center p-5">
              <FiUser className="text-lightGray-250 text-xl" />
            </div>
          </div>

          <div className="flex relative mb-4 bg-dark-250 rounded-md password-container">
            <input
              className="w-full h-16 p-4 pr-0 bg-transparent placeholder-lightGray-750 font-medium text-lightGray-250 outline-none"
              type="password"
              placeholder="Password Confirmation"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <div
              className="cursor-pointer flex items-center p-5"
              onClick={(e) => toggleShowPassword(e, setIsShowPasswordConfirm)}
            >
              {isShowPasswordConfirm ? (
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
            onClick={(e) => handleSignUp(e)}
          >
            <span>Create Account</span>
            <RiUserAddLine className="text-2xl" />
          </button>

          {/* <button
            className="w-full h-16 outline-none active:opacity-70 focus:outline-none text-gray-100 border border-linear-3 rounded-md flex items-center hover:bg-linear-3 transition-all duration-500 ease-in-out"
            type="submit"
          >
            <div className="p-5 flex items-center">
              <FaTwitter className="text-xl" />
            </div>
            <span>Sign in with Twitter</span>
          </button> */}
          <div className="absolute -bottom-6 w-full text-red-500 text-sm">
            {error}
          </div>
        </div>
      </div>
      <div className="text-white flex items-center justify-center">
        <Link to={ROUTES.LOGIN} className="underline">
          Have an account already?
        </Link>
      </div>
    </>
  );
};

export default SignUpForm;
