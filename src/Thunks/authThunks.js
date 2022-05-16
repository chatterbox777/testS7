import { AuthService } from "../Api/AuthService";
import { Paths } from "../Components/Application/AppRouter";
import { operateLocalStorage } from "../Helpers/operateLocalStorage";
import { setAuth, setUser } from "../Store/Slices/AuthSlice";
import { setErrors } from "../Store/Slices/ErrorsSlice";
import { setStartRequest, setStopRequest } from "../Store/Slices/UISlice";

const login = (navigate, values) => {
  return async (dispatch) => {
    try {
      dispatch(setStartRequest());
      const response = await AuthService.login(values);

      dispatch(setUser(response.data));

      dispatch(setAuth(true));

      operateLocalStorage("set", "profileData", response.data);

      operateLocalStorage("set", "isAuth", true);

      navigate(Paths.profile);
    } catch (error) {
      dispatch(setErrors(error));
    } finally {
      dispatch(setStopRequest());
    }
  };
};

export { login };
