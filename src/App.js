import { Layout } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./Components/Application/AppRouter";
import Navigation from "./Components/Elements/Navigation";
import AlertError from "./Components/Toolkit/AlertError";
import { operateLocalStorage } from "./Helpers/operateLocalStorage";
import { setAuth, setUser } from "./Store/Slices/AuthSlice";
import "./Styles/index.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (operateLocalStorage("get", "isAuth")) {
      dispatch(setAuth(true));
      dispatch(setUser(operateLocalStorage("get", "profileData")));
    }
  }, []);
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <Layout.Content>
          <AlertError />
          <AppRouter />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
