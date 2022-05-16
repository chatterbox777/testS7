import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../Router";
import { makeSelectIsAuth } from "../../Selectors/authSelector";

export const Paths = {
  login: "/login",
  home: "/",
  users: "/users",
  profile: "/profile",
};

const AppRouter = () => {
  const isAuth = useSelector(makeSelectIsAuth());
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={<route.component />}
          />
        );
      })}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          element={<route.component />}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          element={<route.component />}
        />
      ))}
      <Route
        path={Paths.profile}
        element={<Navigate to={Paths.login} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
