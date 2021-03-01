import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from "./Dashboard";
import Login from "./Login";
import Loading from './Loading';

const Routing = ({ auth }) => {
    const { isAuthenticated } = auth;

    const renderRoute = () => {
      if(isAuthenticated){
        return <Dashboard />
      } else if(isAuthenticated === null){
        return <Loading />
      } else {
        return <Login />
      }
    }

    return (
      <Fragment>
        {renderRoute()}
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
