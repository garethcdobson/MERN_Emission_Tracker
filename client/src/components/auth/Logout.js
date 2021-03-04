import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

const Logout = ({ logout }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button onClick={toggle}>
                Logout
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    Are you sure you want to logout?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={logout}>
                        Logout
                    </Button>
                <Button onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(null, { logout })(Logout);