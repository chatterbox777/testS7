import axios from "axios";
import { ApiPaths } from "./ApiPaths";

const AuthService = {
  login({ email, password }) {
    return axios.post(`${ApiPaths.host}/login`, {
      email,
      password,
    });
  },
};

export { AuthService };
