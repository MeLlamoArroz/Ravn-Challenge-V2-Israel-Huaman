import React, { useState }  from 'react';

import Divider from '@material-ui/core/Divider';

import LeftMenuContainer from './components/left-menu-container/leftMenuContainer'
import PersonDetails from './components/person-details/personDetails'
import './App.scss';

const App = () => {
  const [person, setCurrentPerson] = useState(null)

  return (
    <div className="App">
      <div className="App-header">
        Ravn Star Wars Registry
      </div>
      <div className="App-main-body">
        <LeftMenuContainer className="App-left-menu" updatePersonInfo={setCurrentPerson}/>
        <Divider className="App-left-divider" flexItem={true}/>
        <PersonDetails className="App-main-page" personInfo={person}/>
      </div>
    </div>
  )
}

export default App;
