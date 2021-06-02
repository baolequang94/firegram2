import React from "react";
import img1 from "../images/img2.svg";

const Login = () => {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center max-w-screen-md">
      <div className="flex w-3/5">
        <img src={img1} className="pr-4" />
      </div>
      <div className="flex w-2/5">
        <form className="border-black bg-white shadow-md w-full border rounded p-4">
          <span className="logo font-logo text-6xl block text-center mb-5 text-yellow-5000 select-none">
            Firegram
          </span>

          <input
            className="w-full shadow border rounded h-2 py-5 px-4 focus:outline-none mb-2"
            type="text"
            placeholder="Username"
          />

          <input
            className="w-full shadow border rounded h-2 py-5 px-4 focus:outline-none mb-2"
            type="password"
            placeholder="Password"
          />

          <button
            className="w-full shadow border rounded px-3 py-2 focus:outline-none bg-yellow-5000 opacity-50"
            type="submit"
            disabled={false}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
