import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './containers/Dashboard'
import EmpForm from './components/EmpForm.js'
class App extends Component{
  constructor()
  {
    super()
    this.state={
        employees:[
        {
            name: "Sachin",
            departement:"Web Developer",
            availability:true,
        },
        {
            name: "Peter",
            departement:"Back ENd Engineer",
            availability:false,
        }
      ]
    }
  }
  addNewEmployee=(data)=>{
    console.log(this.state.employees)
    let empData=this.state.employees
    empData.unshift(data)
    this.setState({
        employees:empData
      })
  }
  render()
  {
    return (
      <div className="App">
       <h1 >Resource Management App</h1>
       <Navbar/>
       <Dashboard addNewEmployee={this.addNewEmployee} employees={this.state.employees} />
       <EmpForm/>
      </div>
    );
  }
}

export default App;
