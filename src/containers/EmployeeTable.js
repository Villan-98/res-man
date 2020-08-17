import React,{ Component } from 'react'
import Row from '../components/Row'

function EmployeeTable ({employees}){
		let rows=employees.map(emp=>

						<Row empDetail={emp}></Row>
		)
		return (

				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Name</th>
							<th>Department</th>
							<th>Available</th>
							<th>View Details</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>

		)
	
}
export default EmployeeTable;