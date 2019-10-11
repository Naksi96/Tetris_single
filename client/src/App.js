import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, HashRouter } from 'react-router-dom';

import Navbar from './client/components/Navbar';
import Tetris from './client/components/Tetris';
import Lobby from './client/components/Lobby';
import Players from './client/components/Players';

import { StyledDashboard } from '../src/client/components/styles/StyledDashboard';

const App = () => (
  <HashRouter hashType={'noslash'} basename={'/'}>
    <div className="App container">
      <Navbar />
      <StyledDashboard className="row">
        <Route exact path="/" component={Lobby} />
        <Route exact path="/:room/:host" component={Players}/>
        <Tetris />
      </StyledDashboard>
    </div>
  </HashRouter>
);

export default App;