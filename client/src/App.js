import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import EmissionGraph from './components/EmissionGraph';
import EmissionTable from './components/EmissionTable';
import AddItemModal from './components/AddItemModal';
import AppSidebar from './components/AppSidebar';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <AppSidebar />
          <Container className="content">
              <div class="dashboard">
                <AddItemModal />
                <EmissionTable />
                <EmissionGraph />
              </div>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
