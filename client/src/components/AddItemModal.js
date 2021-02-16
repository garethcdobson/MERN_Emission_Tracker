import React, { Component } from 'react';
import { 
    Button, 
    Form, 
    FormFeedback,
    FormGroup, 
    Label, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    Input, 
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import transportTypes from '../helpers/transportData';

class ItemModal extends Component {
    state = {
        modal: false, 
        name: '', 
        description: 'No Description', 
        date: '',
        transport: '', 
        distance: null, 
        validate: {
            nameState: null,
            dateState: null,
            transportState: null,
            distanceState: null,
        },
        submitEnabled: false,
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });

        this.resetState();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        if(e.target.name === 'name'){
            this.validateName(e);
        }

        if(e.target.name === 'date'){
            this.validateDate(e);
        }

        if(e.target.name === 'transport'){
            this.validateTransport(e);
        }

        if(e.target.name === 'distance'){
            this.validateDistance(e);
        }

        if(
            this.state.validate.dateState 
            && this.state.validate.nameState 
            && this.state.validate.transportState 
            && this.state.validate.distanceState
        ){
            this.setState({ submitEnabled: true })
        } else {
            this.setState({ submitEnabled: false })
        }
    }

    resetState = () => {
        this.setState({
            name: '', 
            description: 'No Description', 
            date: '',
            transport: '', 
            distance: null, 
            validate: {
                nameState: null,
                dateState: null,
                transportState: null,
                distanceState: null
            },
            submitEnabled: false,
        });
    }

    calculateEmissions = (transport, distance) => {
        var getTransportData = transportTypes.filter(function (transportType) { return transportType.name === transport });

        const calculatedEmissions = ((parseInt(distance) * getTransportData[0].emissions) / 1000);
        
        return calculatedEmissions;
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, description, transport, date, distance } = this.state;

        const newItem = {
            name: name,
            date: date,
            description: description, 
            transport: transport, 
            distance: distance, 
            emissions: this.calculateEmissions(transport, distance)
        };

        this.props.addItem(newItem);

        this.resetState();

        this.toggle();
    }

    validateName(e) {
        const nameRex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
        const { validate } = this.state;
    
        if (nameRex.test(e.target.value)) {
            validate.nameState = true
        } else {
            validate.nameState = false
        }

        this.setState({ validate })
    }

    validateDate(e) {
        const dateRex = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
        const { validate } = this.state;
    
        if (dateRex.test(e.target.value)) {
            validate.dateState = true
        } else {
            validate.dateState = false
        }

        this.setState({ validate })
    }

    validateTransport(e) {
        const { validate } = this.state;
    
        if (e.target.value !== '') {
            validate.transportState = true
        } else {
            validate.transportState = false
        }

        this.setState({ validate })
    }

    validateDistance(e) {
        const distanceRex = /^[+]?\d+([.]\d+)?$/;
        const { validate } = this.state;
    
        if (distanceRex.test(e.target.value)) {
            validate.distanceState = true
        } else {
            validate.distanceState = false
        }

        this.setState({ validate })
    }

    render() {
        const { submitEnabled } = this.state;

        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '1rem'}}
                    onClick={this.toggle}
                >
                    Add New Emission Activity
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add Emission Activity</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="name">Name *</Label>
                            <Input 
                                type="name" 
                                name="name" 
                                id="name" 
                                placeholder="Name" 
                                onChange={this.onChange} 
                                valid={this.state.validate.nameState}
                                invalid={this.state.validate.nameState === false}
                            />
                            <FormFeedback valid></FormFeedback>
                            <FormFeedback invalid>
                                Please enter a valid name.
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">Date *</Label>
                            <Input
                                type="date"
                                name="date"
                                id="date"
                                placeholder="date placeholder"
                                onChange={this.onChange}
                                valid={this.state.validate.dateState}
                                invalid={this.state.validate.dateState === false}
                            />
                            <FormFeedback valid></FormFeedback>
                            <FormFeedback invalid>
                                Please enter a valid date between 1900-2099.
                            </FormFeedback>
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
                            <Label for="transport">Transport *</Label>
                            <Input 
                                type="select" 
                                name="transport" 
                                id="transport" 
                                onChange={this.onChange}   
                                valid={this.state.validate.transportState}
                                invalid={this.state.validate.transportState === false}
                                size="sm"
                                multiple
                            >
                                {transportTypes.map(transport => {
                                    return (
                                        <option>{transport.name}</option>
                                    )
                                })}
                            </Input>
                            <FormFeedback valid></FormFeedback>
                            <FormFeedback invalid>
                                Please select a transport type.
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="distance">Distance (km) *</Label>
                            <Input 
                                type="number" 
                                name="distance" 
                                id="distance" 
                                placeholder="" 
                                onChange={this.onChange}
                                valid={this.state.validate.distanceState}
                                invalid={this.state.validate.distanceState === false}
                            />
                            <FormFeedback valid></FormFeedback>
                            <FormFeedback invalid>
                                Please enter a valid distance.
                            </FormFeedback>
                        </FormGroup>
                        <Button color="dark" type="submit" disabled={!submitEnabled}>Submit</Button>
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