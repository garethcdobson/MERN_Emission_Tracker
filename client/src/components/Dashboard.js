import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppNavbar from './AppNavbar';
import EmissionGraph from './EmissionGraph';
import EmissionTable from './EmissionTable';
import AddItemModal from './AddItemModal';
import AppSidebar from './AppSidebar';

const Dashboard = () => {
    return (
        <Fragment>
            <AppNavbar />
            <AppSidebar />
            <div className="content">
                <div class="dashboard">
                    <AddItemModal />
                    <EmissionTable />
                    <EmissionGraph />
                </div>
            </div>
        </Fragment>
    );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Dashboard);
