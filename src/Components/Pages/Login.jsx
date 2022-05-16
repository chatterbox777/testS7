import React, { useEffect } from "react";
import { Layout, Row } from "antd";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Elements/LoginForm";
import { useSelector } from "react-redux";
import { makeSelectIsAuth } from "../../Selectors/authSelector";
import { Paths } from "../Application/AppRouter";

const Login = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(makeSelectIsAuth());
  useEffect(() => {
    if (isAuth) {
      navigate(Paths.profile);
    }
  }, [isAuth]);
  return (
    <Layout>
      <Row
        justify="center"
        align="middle"
        style={{ marginTop: "20px", height: "calc(100vh - 134px)" }}
      >
        <LoginForm />
      </Row>
    </Layout>
  );
};

export default Login;
