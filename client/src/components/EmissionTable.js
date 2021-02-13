import React, { Component, Fragment } from 'react';
import { Button, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class EmissionTable extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    handleDeleteItem = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;

        return(
            <Fragment>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Entry</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Transport</th>
                            <th>Distance (km)</th>
                            <th>CO2 Emissions (kgs)</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(({ _id, name, description, transport, distance, emissions, date }, index) => (
                            <tr>
                                <th>
                                    <Button 
                                        onClick={this.handleDeleteItem.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>
                                </th>
                                <th scope="row">{index + 1}</th>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{transport}</td>
                                <td>{distance}</td>
                                <td>{emissions}</td>
                                <td>{date}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Fragment>
        )
    };
};

EmissionTable.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    item: state.item,
})

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
)(EmissionTable);