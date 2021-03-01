import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from "./Dashboard";
import Login from "./Login";

const Routing = ({ auth }) => {
    const { isAuthenticated } = auth;

    return (
      <Fragment>
        {isAuthenticated ? <Dashboard /> : <Login />}
      </Fragment>
    );
};

Routing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Routing);
