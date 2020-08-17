import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './containers/Dashboard'
import EmpForm from './components/EmpForm.js'
function App() {
  return (
    <div className="App">
     <h1 >Resource Management App</h1>
     <Navbar/>
     <Dashboard/>
     <EmpForm/>
    </div>
  );
}

export default App;
