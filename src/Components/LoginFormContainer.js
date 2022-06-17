import React from "react";
import useForm from "../Hooks/useForm";
import LoginForm from "./LoginForm";

const LoginFormContainer = () => {
  const { formState, onInputChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const viewForm = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return <LoginForm onInputChange={onInputChange} viewForm={viewForm} />;
};
export default LoginFormContainer;
