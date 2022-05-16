import React from "react";
import { Layout, Row, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Paths } from "../Application/AppRouter";
import { setAuth } from "../../Store/Slices/AuthSlice";
import { makeSelectIsAuth } from "../../Selectors/authSelector";
import { operateLocalStorage } from "../../Helpers/operateLocalStorage";

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(makeSelectIsAuth());
  const navigate = useNavigate();

  const onLogout = () => {
    operateLocalStorage("remove", "isAuth");
    dispatch(setAuth(false));
    navigate("/login");
  };
  const onLogin = () => {
    navigate(Paths.login);
  };
  const onHome = () => {
    navigate(Paths.home);
  };
  const onUsers = () => {
    navigate(Paths.users);
  };
  const onProfile = () => {
    navigate(Paths.profile);
  };

  return (
    <Layout.Header style={{ marginBottom: "50px" }}>
      <Row style={{ width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ margin: "0 auto", width: "20%" }}
        >
          <Menu.Item key={1} onClick={onHome}>
            Home
          </Menu.Item>
          <Menu.Item key={2} onClick={onUsers}>
            Users
          </Menu.Item>
          <Menu.Item key={3} onClick={onProfile}>
            Profile
          </Menu.Item>
          {!isAuth ? (
            <Menu.Item key={4} onClick={onLogin}>
              Login
            </Menu.Item>
          ) : (
            <Menu.Item key={5} onClick={onLogout}>
              Log out
            </Menu.Item>
          )}
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default React.memo(Navigation);
