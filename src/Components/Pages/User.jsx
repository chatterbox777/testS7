import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return <div>Concrete user with id = {userId}</div>;
};

export default User;
