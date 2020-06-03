import React from "react";

import { Register as RegisterPage } from "components";

const Register = () => {
  const handleRegister = (form) => {
    if (form.current.check()) {
      //form.current.state.formValue
      //alert("Register");
      console.log(form.current.state.formValue);
    }
  };

  return <RegisterPage onRegister={handleRegister} />;
};

export default Register;
