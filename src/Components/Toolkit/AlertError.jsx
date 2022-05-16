import React from "react";
import { Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectErrors } from "../../Selectors/errorsSelector";
import { clearErrors } from "../../Store/Slices/ErrorsSlice";

const AlertError = () => {
  const errors = useSelector(selectErrors);
  const dispatch = useDispatch();
  const onClose = (e, index) => {
    dispatch(clearErrors(index));
  };
  return (
    <>
      {errors.length > 0 &&
        errors.map((error, index) => (
          <Alert
            key={error}
            message={error.message}
            description={error.description}
            type="error"
            closable
            onClose={(e) => onClose(e, index)}
          />
        ))}
    </>
  );
};

export default AlertError;
