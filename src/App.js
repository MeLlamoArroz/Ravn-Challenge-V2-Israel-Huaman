import React from 'react';

import LeftMenuBar from './components/left-bar-menu/leftMenuBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        Ravn Star Wars Registry
      </div>
      <LeftMenuBar/>
      <div className="App-left-menu-bar">
      </div>
      <div className="App-main-page">
      </div>
    </div>
  )
}

export default App;
