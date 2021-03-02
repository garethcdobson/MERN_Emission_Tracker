import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import trashIcon from '../assets/trash-icon.png';

const RemoveItemModal = (props) => {
    const { onRemoveItem } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onClickRemoveItem = () => {
        onRemoveItem();
        toggle();
    }

    return (
        <div>
            <Button onClick={toggle} className="delete-item-button">
                <img src={trashIcon} alt="delete item" height="25px" />
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    Are you sure you want to remove this item?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={onClickRemoveItem}>
                        Remove Item
                    </Button>
                <Button onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default RemoveItemModal;