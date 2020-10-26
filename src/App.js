import React from 'react';

import Divider from '@material-ui/core/Divider';

import LeftMenubarContainer from './components/left-menu-container/leftMenuContainer'
import PersonDetails from './components/person-details/personDetails'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        Ravn Star Wars Registry
      </div>
      <div className="App-main-body">
        <LeftMenubarContainer className="App-left-menu"/>
        <Divider className="App-left-divider" flexItem={true}/>
        <PersonDetails className="App-main-page"/>
      </div>
    </div>
  )
}

export default App;
