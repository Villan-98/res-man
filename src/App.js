import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './containers/Dashboard'
class App extends Component{
  constructor()
  {
    super()
    this.state={
        employees:[
        {
          id:1,
          name:"Sachin",

          gender:"Male",

          age:12,
          designation:"Wsdfsdfs",

          department:"Frontend Development",

          joiningDate:"2020-08-11",

          availability:true,
        }
        ,
        {
          id:2,
          name:"Sachin",

          gender:"Male",
          age:12,
          designation:"Wsdfsdfs",

          department:"Frontend Development",

          joiningDate:"2020-08-11",

          availability:true,
        },
        {
          id:3,
          name:"Sachin",

          gender:"Male",

          age:12,
          designation:"Wsdfsdfs",

          department:"Frontend Development",

          joiningDate:"2020-08-11",

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
  editEmployee=(id,data)=>{
    console.log("editEmployee")
     let temp=this.state.employees
        temp.forEach(x=> {
            // mutate the urgent and set it...
            if(x.id===id){
              console.log(x)
            }
        })
        this.setState({employees:temp})

  }
  render()
  {
    return (
      <div className="App">
       <h1 >Resource Management App</h1>
       <Navbar/>
       <Dashboard addNewEmployee={this.addNewEmployee} editEmployee={this.editEmployee} employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
