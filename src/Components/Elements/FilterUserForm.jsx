import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { EMAIL, FIRST_NAME, LAST_NAME } from "../../Constants/UserTypes";
import { useDispatch } from "react-redux";
import { filterUsers } from "../../Store/Slices/UsersSlice";
import { getUsers } from "../../Thunks/usersThunks";
import { operateLocalStorage } from "../../Helpers/operateLocalStorage";

const FilterUserForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  useEffect(() => {
    if (operateLocalStorage("get", "filters")) {
      let filters = operateLocalStorage("get", "filters");
      Object.keys(filters).forEach((key) => {
        form.setFieldsValue({ [key]: filters[key] });
      });
      dispatch(filterUsers(filters));
    }
  }, []);

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 8,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  const onFinish = (filters) => {
    if (filters[FIRST_NAME] === "") {
      dispatch(getUsers());
    }
    dispatch(filterUsers(filters));
  };
  const onClearForm = () => {
    if (operateLocalStorage("get", "filters")) {
      operateLocalStorage("remove", "filters");
    }
    dispatch(getUsers());
  };

  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onFinish={onFinish}
    >
      <Form.Item label="First Name" name={FIRST_NAME}>
        <Input placeholder="enter First Name" />
      </Form.Item>
      <Form.Item label="Last Name" name={LAST_NAME}>
        <Input placeholder="enter Last Name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name={EMAIL}
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input placeholder="enter Email" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">
          Filter
        </Button>
        <Button
          style={{
            margin: "0 8px",
          }}
          onClick={() => {
            form.resetFields();
            onClearForm();
          }}
        >
          Clear
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FilterUserForm;
