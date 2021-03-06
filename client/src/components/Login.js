import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import worldIcon from '../assets/connected-world.svg';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import { Button } from 'reactstrap';

const Login = () => {
    return (
        <div>
            <div className="row">
                <div className="login-left col-sm row align-items-center justify-content-center">
                    <div className="login-box">
                        <h1>Welcome To <strong>CarbonHub</strong></h1>
                        <RegisterModal />
                        <LoginModal />
                        <Button>What Is CarbonHub?</Button>
                    </div>
                </div>
                <img className="login-right col-sm-6" src={worldIcon} alt="Nature Illustration"></img>
            </div>
        </div>
    );
};

Login.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, null)(Login);