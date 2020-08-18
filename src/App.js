import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './containers/Dashboard'
import PageButton from './components/PageButton'
class App extends Component{
  constructor()
  {
    super()
    
      if(localStorage.employees===undefined)
      {
        this.state={employees:[],searchEmployees:[],pageNo:1}
      }
      else
      {
          this.state={
          employees:JSON.parse(localStorage.employees),
          searchEmployees:JSON.parse(localStorage.employees),
          pageNo:1
        }
      } 
  }
  addNewEmployee=(data)=>{
    let empData=this.state.employees
    empData.unshift(data) 
    alert("Employee Detail added successfuly")
    this.sortByAvailability(empData);
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
              temp[i]=data
              break;
            }
          }
          this.sortByAvailability(temp)

  }
  deleteEmployeeFun=(data)=>{

    let temp=this.state.employees
    for(let i=0;i<temp.length;i++)
    {
      if(temp[i].id===data.id)
      {
        temp.splice(i,1);
        break;
      }
    }
    this.sortByAvailability(temp);
  }
  searchResultFun=(data)=>{
    let temp=JSON.parse(localStorage.employees)
    let result=[]
    for(let i=0;i<temp.length;i++)
    {
        if(temp[i].name.includes(data.pat)||temp[i].designation .includes(data.pat))
        {
          result.push(temp[i])
        }
    }
    result.sort(function(a,b){

      return a.availability?-1:1
    })
    this.setState({
      searchEmployees:result
    })
    
  }
  sortByAvailability(data)
  {

    data.sort(function(a,b){

      if(a.availability)
      {
        return -1
      }
      else if(b.availability)
      {
        return 1;
      }
        return 0;
    })
    this.setState({
      employees:data,
      searchEmployees:data,
    },this.updateLocalStorage)
  }
  showPage=(data)=>
  {
      
      this.setState({
        pageNo:data.pno
      })
  }
  render()
  {
    return (
      <div className="App container">
       <Navbar/>       <Dashboard addNewEmployee={this.addNewEmployee} editEmployee={this.editEmployee} pageNo={this.state.pageNo}
       deleteEmployeeFun={this.deleteEmployeeFun} employees={this.state.searchEmployees} searchResultFun={this.searchResultFun}/>
       <PageButton showPage={this.showPage} pageNo={this.state.pageNo} /> 
       
      </div>
    );
  }
}

export default App;
