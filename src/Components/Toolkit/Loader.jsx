import React from "react";
import { Spin } from "antd";

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="loader">
        <Spin tip="Loading..." />
      </div>
    )
  );
};

export default Loader;
