import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/ROUTES";

const Navbar = ({ type }) => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 py-6 max-w-screen-lg mx-auto">
        <Logo />
        <Link to={ROUTES[type]}>
          <button className="text-white focus:outline-none rounded py-2 px-8 bg-gradient-to-tr from-linear-1 via-linear-2 to-linear-3 transition-opacity duration-500 ease-in-out active:opacity-70 w-32 h-10">
            {type === "LOGIN" ? "Login" : "Sign Up"}
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
