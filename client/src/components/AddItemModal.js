import React, { Component } from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    Input, 
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import { v4 as uuid } from 'uuid';

class ItemModal extends Component {
    state = {
        modal: false, 
        name: '', 
        description: '', 
        transport: 'Bicycle', 
        distance: 0, 
        emissions: 0
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    resetState = () => {
        this.setState({
            name: '', 
            description: '', 
            transport: 'Bicycle', 
            distance: 0, 
            emissions: 0
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, description, transport, distance, emissions } = this.state;

        const newItem = {
            id: uuid(),
            name: name,
            description: description, 
            transport: transport, 
            distance: distance, 
            emissions: emissions,
        }

        this.props.addItem(newItem);

        this.resetState();

        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Item</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add Emission Activity</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input 
                                type="name" 
                                name="name" 
                                id="name" 
                                placeholder="Name" 
                                onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input
                                type="date"
                                name="date"
                                id="date"
                                placeholder="date placeholder"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description (Optional)</Label>
                            <Input 
                                type="textarea" 
                                name="description" 
                                id="description" 
                                placeholder="Description" 
                                onChange={this.onChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="transport">Transport</Label>
                            <Input type="select" name="transport" id="transport" onChange={this.onChange}>
                                <option>Bicycle</option>
                                <option>Car</option>
                                <option>Electric Car</option>
                                <option>Electric Bicycle / Scooter</option>
                                <option>Plane</option>
                                <option>Train</option>
                                <option>Bus</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="distance">Distance</Label>
                            <Input 
                                type="number" 
                                name="distance" 
                                id="distance" 
                                placeholder="0.00km" 
                                onChange={this.onChange}
                            />
                        </FormGroup>
                        <Button color="dark" type="submit">Submit</Button>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);