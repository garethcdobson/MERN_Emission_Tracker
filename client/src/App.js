import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import EmissionTable from './components/EmissionTable';
import AddItemModal from './components/AddItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <div class="sidebar">
            <a class="active" href="">Dashboard</a>
            <a href="">Profile</a>
            <a href="">Contact</a>
          </div>
          <Container className="content">
              <AddItemModal />
              <EmissionTable />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
