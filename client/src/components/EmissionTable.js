import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';

class EmissionTable extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Georgia', description: 'Cycling to work', transport: 'Bike', distance: 3, emissions: 0 },
            { id: uuid(), name: 'Andy', description: 'Drive to work', transport: 'Car', distance: 20, emissions: 100 },
            { id: uuid(), name: 'Jerry', description: 'Flying to France for work', transport: 'Plane', distance: 400, emissions: 500 },
        ]
    }

    handleSubmit() {
        alert("SUBMITTED");
    }

    render() {
        const { items } = this.state;

        return(
            <Fragment>
                <Table hover>
                    <thead>
                        <tr>
                        <th>Entry</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Transport</th>
                        <th>Distance</th>
                        <th>Emissions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(({ name, description, transport, distance, emissions }, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{transport}</td>
                                <td>{distance}</td>
                                <td>{emissions}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Form onSubmit={this.handleSubmit} className="m-5">
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="name" name="name" id="name" placeholder="Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="date"
                            placeholder="date placeholder"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description (Optional)</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Description" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="transport">Transport</Label>
                        <Input type="select" name="transport" id="transport">
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
                        <Input type="number" name="distance" id="distance" placeholder="0.00km" />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </Fragment>
        )
    };
};

export default EmissionTable;