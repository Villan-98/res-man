import React from 'react';
import './App.css';
import Dashboard from './containers/Dashboard'

import EmpForm from './components/EmpForm.js'
function App() {
  return (
    <div className="App">
     <h1 >Resource Management App</h1>
     <Dashboard/>
     <EmpForm/>
    </div>
  );
}

export default App;
