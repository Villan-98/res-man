import React,{ Component } from 'react'
import Row from '../components/Row'
import {Table} from 'react-bootstrap'

function EmployeeTable ({employees,editEmployee,deleteEmployeeFun,pageNo}){
		let tempEmp=[]
		let count=5*(pageNo-1)
		for(let i=count;i<count+5 && i<employees.length;i++)
		{
			console.log(i)
			tempEmp.push(employees[i])
		}
		let rows=tempEmp.map(emp=>
						<Row key={emp.id} empDetail={emp} editEmployee={editEmployee}  deleteEmployeeFun={deleteEmployeeFun}></Row>
		)
		return (

				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Name</th>
							<th>Age</th>
							<th>Gender</th>
							<th>Department</th>
							<th>Designation</th>
							<th>Available</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</Table>

		)
	
}
export default EmployeeTable;