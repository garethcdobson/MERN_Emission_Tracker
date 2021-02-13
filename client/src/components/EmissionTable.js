import React, { Component, Fragment } from 'react';
import { Button, Container, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import trashIcon from '../assets/trash-icon.png';

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
            <div className="emission-table">
                <Table striped size="sm" responsive hover>
                    <thead>
                        <tr>
                            <th>Entry</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Transport</th>
                            <th>Distance (km)</th>
                            <th>CO2 Emissions (kgs)</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(({ _id, name, description, transport, distance, emissions, date }, index) => (
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{transport}</td>
                                <td>{distance}</td>
                                <td>{emissions}</td>
                                <td>{date}</td>
                                <td>
                                    <Button 
                                        onClick={this.handleDeleteItem.bind(this, _id)}
                                        className="delete-item-button"
                                    >
                                        <img src={trashIcon} alt="delete item" height="30px" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
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