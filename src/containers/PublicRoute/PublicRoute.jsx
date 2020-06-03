import React, { useEffect } from "react";

import { connect } from "react-redux";

import { getSessions } from "__redux__/actions";

import { PublicRoute as PublicRoutePage } from "components";

const PublicRoute = ({ loggedInUser, getSessions, fetchingSession }) => {
  useEffect(() => {
    getSessions();
  }, [getSessions]);

  return (
    <PublicRoutePage
      fetchingSession={fetchingSession}
      loggedInUser={loggedInUser}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
    fetchingSession: state.auth.fetchingSession,
  };
};

const mapDispatchToProps = {
  getSessions,
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute);
