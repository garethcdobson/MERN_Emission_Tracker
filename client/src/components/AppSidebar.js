import React from 'react';
import plantLogo from '../assets/logo.svg';
import Logout from './auth/Logout';
import AddItemModal from './AddItemModal';

const AppSidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={plantLogo} alt="CarbonHub Logo" height="40px" />
                <h1>Carbon<strong>Hub</strong></h1>
            </div>
            <a className="active" href="/">Team Dashboard</a>
            <a href="/">Personal Dashboard</a>
            <a href="/">About CarbonHub</a>
            <a href="https://github.com/garethcdobson/MERN_Emission_Tracker" target="_blank" rel="noreferrer noopener">Project Github</a>
            <a href="https://www.linkedin.com/in/gareth-dobson-b449b319b/" target="_blank" rel="noreferrer noopener">Author LinkedIn</a>
            <AddItemModal />
            <Logout />
        </div>
    );
};

export default AppSidebar;
