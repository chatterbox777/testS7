import { createSlice } from "@reduxjs/toolkit";
import { operateLocalStorage } from "../../Helpers/operateLocalStorage";

const initialState = {
  users: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, { payload: users }) => {
      state.users = users;
    },
    deleteUser: (state, { payload: userId }) => {
      state.users = state.users.filter((user) => user.id !== userId);
    },
    createUser: (state, { payload: { user } }) => {
      const lastUsersId = state.users[state.users?.length - 1]?.id ?? 0;
      const userWithUpdatedId = { ...user, id: lastUsersId + 1 };

      state.users.push(userWithUpdatedId);
    },
    filterUsers: (state, { payload: filters }) => {
      operateLocalStorage("set", "filters", filters);
      
      state.users = state.users.filter((user) => {
        let result;
        for (let key in filters) {
          if (user[key].includes(filters[key])) {
            return true;
          } else {
            result = false;
          }
        }
        return result;
      });
    },
  },
});
export const { setUsers, deleteUser, createUser, filterUsers } =
  usersSlice.actions;

export default usersSlice.reducer;
