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
        // {
        //   id:1,
        //   name:"Sachin",

        //   gender:"Male",

        //   age:12,
        //   designation:"Wsdfsdfs",

        //   department:"Frontend Development",

        //   joiningDate:"2020-08-11",

        //   availability:true,
        // }
        // ,
        // {
        //   id:2,
        //   name:"Sachin",

        //   gender:"Male",
        //   age:12,
        //   designation:"Wsdfsdfs",

        //   department:"Frontend Development",

        //   joiningDate:"2020-08-11",

        //   availability:true,
        // },
        // {
        //   id:3,
        //   name:"Sachin",

        //   gender:"Male",

        //   age:12,
        //   designation:"Wsdfsdfs",

        //   department:"Frontend Development",

        //   joiningDate:"2020-08-11",

        //   availability:false,
        // }
      ]
    }
    // function getAllFromLocalStorage(string)
    // {

    // }
    console.log(localStorage.employees)
    localStorage.employees===undefined?
    this.state={employees:[]}:
    this.state={
      employees:JSON.parse(localStorage.employees)
    }
  }
  addNewEmployee=(data)=>{
    console.log(this.state.employees)
    let empData=this.state.employees
    empData.unshift(data) 
    alert("Employee Detail added successfuly")
    this.setState({
        employees:empData
      },this.updateLocalStorage)

  }
  updateLocalStorage=()=>{
        localStorage.employees=JSON.stringify(this.state.employees)
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
        this.setState({employees:temp},this.updateLocalStorage)

  }
  deleteEmployeeFun=(data)=>{
    console.log("deleteEmployeeFun")

    let temp=this.state.employees
    console.log(temp.length)
    for(let i=0;i<temp.length;i++)
    {
      if(temp[i].id===data.id)
      {
        temp.splice(i,1);
        break;
      }
    }
    console.log(temp.length,data.id)
    this.setState({
      employees:temp
    },this.updateLocalStorage)
  }
  render()
  {
    return (
      <div className="App">
       <h1 >Resource Management App</h1>
       <Navbar/>
       <Dashboard addNewEmployee={this.addNewEmployee} editEmployee={this.editEmployee} deleteEmployeeFun={this.deleteEmployeeFun} employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
