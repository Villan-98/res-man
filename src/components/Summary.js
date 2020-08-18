import React,{Fragment,useState} from 'react'
import {Button,Card,CardGroup} from 'react-bootstrap'

import Temp from './FormModal'
import SearchBar from  './SearchBar'
function Summary(props)
{
	return (
		<>
			<CardGroup>
  <Card>
    <Card.Body>
      <Card.Title style={{textAlign: "center"}}>Dashboard Summary</Card.Title>
      <Card.Text>

      <h5 className="text-secondary mb-2">Available: <span
							className="font-weight-bold ml-1 text-dark">{props.availableEmployee}</span></h5>
		<h5 className="text-secondary">Total: <span className="font-weight-bold ml-1 text-dark">{props.employees.length}</span>
					</h5>
					​<Temp addNewEmployee={props.addNewEmployee} employees={props.employees}/>					
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Body>
      <Card.Title style={{textAlign: "center"}} >Search By Name/Designation</Card.Title>
      <Card.Text>
      <SearchBar searchResultFun={props.searchResultFun}/>
      </Card.Text>
    </Card.Body>
  </Card>
  
</CardGroup>
			

			​
		</>
	)
}
export default Summary