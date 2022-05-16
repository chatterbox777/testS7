import { UsersService } from "../Api/UsersService";
import { setErrors } from "../Store/Slices/ErrorsSlice";
import { setStartRequest, setStopRequest } from "../Store/Slices/UISlice";
import { setUsers } from "../Store/Slices/UsersSlice";

const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(setStartRequest());

      const response = await UsersService.getUsers();

      dispatch(setUsers(response.data.data));
    } catch (error) {
      dispatch(setErrors(error));
    } finally {
      dispatch(setStopRequest());
    }
  };
};

export { getUsers };
