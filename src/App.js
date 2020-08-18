import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './containers/Dashboard'
class App extends Component{
  constructor()
  {
    super()
    
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
  editEmployee=(data)=>{
     let temp=this.state.employees
         for(let i=0;i<temp.length;i++)
          {
            if(temp[i].id===data.id)
            {
              console.log("break")
              temp[i]=data
              break;
            }
          }
          console.log(temp)
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
  searchResultFun=(data)=>{
    console.log("search result")
    let temp=JSON.parse(localStorage.employees)
    let result=[]
    console.log(data.pat)
    for(let i=0;i<temp.length;i++)
    {
        if(temp[i].name.includes(data.pat)||temp[i].designation .includes(data.pat))
        {
          result.push(temp[i])
        }
    }
    console.log(result)
    this.setState({
      employees:result
    })
  }
  render()
  {
    return (
      <div className="App">
       <h1 >Resource Management App</h1>
       <Navbar/>
       <Dashboard addNewEmployee={this.addNewEmployee} editEmployee={this.editEmployee} 
       deleteEmployeeFun={this.deleteEmployeeFun} employees={this.state.employees} searchResultFun={this.searchResultFun}/>
      </div>
    );
  }
}

export default App;
