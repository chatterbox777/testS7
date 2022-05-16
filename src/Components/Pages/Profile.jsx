import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import { makeSelectUser } from "../../Selectors/authSelector";
const Profile = () => {
  const user = useSelector(makeSelectUser());
  return (
    user && (
      <div>
        User with someid <br />
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </div>
    )
  );
};

export default Profile;
