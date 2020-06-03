import React from "react";
import { connect } from "react-redux";

import { Login as LoginPage } from "components";

import { login } from "__redux__/actions";

const Login = ({ login, loading, error: errorKey }) => {
  const handleLogin = (form) => {
    const isValidForm = form.current.check();
    if (isValidForm) {
      login({});
    }
  };

  return (
    <LoginPage onLogin={handleLogin} loading={loading} errorKey={errorKey} />
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

const mapDispathToProps = {
  login,
};

export default connect(mapStateToProps, mapDispathToProps)(Login);
