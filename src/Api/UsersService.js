import axios from "axios";
import { ApiPaths } from "./ApiPaths";

const UsersService = {
  getUsers() {
    return axios.get(`${ApiPaths.host}/users`);
  },
};

export { UsersService };
