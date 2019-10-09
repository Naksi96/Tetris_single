import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './client/components/Navbar';
import Tetris from './client/components/Tetris';
import Lobby from './client/components/Lobby';
import UserContainer from './client/containers/UserContainer';

import { StyledDashboard } from '../src/client/components/styles/StyledDashboard';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <StyledDashboard>
        <UserContainer/>
        <Lobby />
        <Tetris />
      </StyledDashboard>
    </div>
  </Router>
);

export default App;