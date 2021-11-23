import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        let customer = JSON.stringify(sessionStorage.getItem("user"));
        let getUserObj = JSON.parse(customer);
        let user = JSON.parse(getUserObj);

        if (user !== null) {
          if (
            user.token !== "" ||
            user.token !== null ||
            user.token !== undefined
          ) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/" />;
          }
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}
