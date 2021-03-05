import React from 'react';
import EmissionGraph from './EmissionGraph';
import EmissionTable from './EmissionTable';
import AppSidebar from './AppSidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <AppSidebar />
            <div className="content">
                <EmissionGraph />
                <EmissionTable />
            </div>
        </div>
    )
};

export default Dashboard;
