import React from "react";
import { Tabs } from "antd";
import { useState } from "react";
import { USERS, USER_CREATE } from "../../Constants/UsersTypes";
import FilterUserForm from "../Elements/FilterUserForm";
import NewUserForm from "../Elements/NewUserForm";

const { TabPane } = Tabs;

const renderUsers = (info) => {
  return info.constants.map((entity, i) => (
    <TabPane tab={entity} key={i}>
      {entity === USER_CREATE ? <NewUserForm /> : <FilterUserForm />}
    </TabPane>
  ));
};

const TabsCustom = ({ info }) => {
  const [mode, setMode] = useState("horizontal");

  return (
    <div className="tabs">
      <Tabs
        tabPosition={mode}
        style={{
          height: 220,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        {
          {
            [USERS]: renderUsers(info),
          }[info.entity]
        }
      </Tabs>
    </div>
  );
};

export default React.memo(TabsCustom);
