import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import RemoveItemModal from './RemoveItemModal';

class EmissionTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            pagesCount: 0,
            pageSize: 5
        };
    };

    componentDidMount() {
        this.props.getItems();
        this.handleItemsLoading();
    };

    handleDeleteItem = (id) => {
        this.props.deleteItem(id);
    };

    handleItemsLoading = () => {
        const { items } = this.props.item;
        if( items.length !== 0){
            this.calculatePagesCount();
        }
        else{
            setTimeout(this.handleItemsLoading, 500);
        }
    }

    calculatePagesCount = () => {
        const { items } = this.props.item;
        const { pageSize } = this.state;

        const pagesCount = Math.ceil(items.length / pageSize);
        this.setState({
            pagesCount: pagesCount
        })
    };

    setCurrentPage = (page) => {
        this.setState({
            currentPage: page
        })
    };

    handlePageClick = (e, index) => {
        e.preventDefault();
        this.setCurrentPage(index);
    };

    handleFirstClick = (e) => {
        e.preventDefault();
        this.setCurrentPage(0);
    };

    handlePreviousClick = (e) => {
        e.preventDefault();
        this.setCurrentPage(this.state.currentPage - 1);
    };

    handleLastClick = (e) => {
        e.preventDefault();
        this.setCurrentPage(this.state.pagesCount - 1);
    };

    handleNextClick = (e) => {
        e.preventDefault();
        this.setCurrentPage(this.state.currentPage + 1);
    };

    render() {
        const { items } = this.props.item;
        const { currentPage, pageSize, pagesCount} = this.state;

        return(
            <div className="dashboard-panel">
                <h2>Emission Activity</h2>
                <Table className="emission-table" responsive hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Transport</th>
                        <th>Distance (km)</th>
                        <th>CO<sub>2</sub> Emissions (kg)</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items
                        .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                        .map(({_id, name, description, transport, distance, emissions, date}) => {
                        return (
                            <tr key={_id}>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{transport}</td>
                                <td>{distance}</td>
                                <td>{emissions.toFixed(2)}</td>
                                <td>{date.substring(0, 10)}</td>
                                <td>
                                    <RemoveItemModal onRemoveItem={this.handleDeleteItem.bind(this, _id)}/>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
                <Pagination size="sm">
                    <PaginationItem disabled={currentPage <= 0}>
                        <PaginationLink onClick={this.handleFirstClick} first />
                    </PaginationItem>
                    <PaginationItem disabled={currentPage <= 0}>
                        <PaginationLink onClick={this.handlePreviousClick} previous />
                    </PaginationItem>
                    {[...Array(pagesCount)].map((page, i) => (
                        <PaginationItem active={i === currentPage} key={i}>
                            <PaginationLink onClick={e => this.handlePageClick(e, i)}>
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem disabled={(currentPage >= pagesCount - 1)}>
                        <PaginationLink onClick={this.handleNextClick} next />
                    </PaginationItem>
                    <PaginationItem disabled={(currentPage >= pagesCount - 1)}>
                        <PaginationLink onClick={this.handleLastClick} last />
                    </PaginationItem>
                </Pagination>
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