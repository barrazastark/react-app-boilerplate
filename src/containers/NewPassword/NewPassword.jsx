import React from "react";

import { NewPassword as NewPasswordPage } from "components";

const NewPassword = () => {
  const handleSendEmal = (form) => {
    if (form.current.check()) {
      //form.current.state.formValue
      //alert("Enviar");
      console.log(form.current.state.formValue);
    }
  };

  return <NewPasswordPage onSend={handleSendEmal} />;
};

export default NewPassword;
