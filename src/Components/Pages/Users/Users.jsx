import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Avatar, Skeleton } from "antd";
import { makeSelectUiIsRequestInProcess } from "../../../Selectors/uiSelector";
import { selectUsers } from "../../../Selectors/usersSelector";
import { getUsers } from "../../../Thunks/usersThunks";
import { deleteUser } from "../../../Store/Slices/UsersSlice";
import {
  USERS,
  USERS_FILTER,
  USER_CREATE,
} from "../../../Constants/UsersTypes";
import Loader from "../../Toolkit/Loader";
import TabsCustom from "../../Toolkit/Tabs";
import "./index.scss";
import { useMount } from "../../../Hooks/useMount";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(selectUsers);
  const isRequestInProcess = useSelector(makeSelectUiIsRequestInProcess());
  const [tabsData, setTabsData] = useState({
    entity: USERS,
    constants: [USER_CREATE, USERS_FILTER],
  });
  const isMounted = useMount();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div className="users">
      <Loader isLoading={isRequestInProcess} />
      <TabsCustom info={tabsData} />

      {users && (
        <List
          className="users__list"
          itemLayout="horizontal"
          dataSource={users}
          renderItem={(user) => (
            <List.Item
              className="users__item"
              actions={[
                <a href={`/users/${user.id}`} key="list-loadmore-info">
                  info
                </a>,
                <a
                  key="list-loadmore-delete"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  delete
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={user.loading} active>
                <List.Item.Meta
                  avatar={
                    <a href={`/users/${user.id}`}>
                      <Avatar src={user.avatar} />
                    </a>
                  }
                  title={
                    <a href={`/users/${user.id}`}>
                      {user.last_name} {user.first_name}
                    </a>
                  }
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>{user.email}</div>
              </Skeleton>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Users;
