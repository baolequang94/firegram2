import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/ROUTES";

const Logo = ({ isDark }) => {
  return (
    <>
      <Link to={ROUTES.DASHBOARD}>
        <h1
          className={`${
            isDark ? "text-black" : "text-white"
          } font-logo text-2xl`}
        >
          Firegram
        </h1>
      </Link>
    </>
  );
};

export default Logo;
