import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/ROUTES";

export const ProtectedAlreadyLoggedInRoute = ({
  user,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: ROUTES.DASHBOARD,
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};
