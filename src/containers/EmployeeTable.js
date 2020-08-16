import React,{ Component } from 'react'
import Row from '../components/Row'

class EmployeeTable extends Component{
	render(){
		return (

				<table class="table table-bordered">
					<thead>
						<tr>
							<th>Name</th>
							<th>Department</th>
							<th>Available</th>
							<th>View Details</th>
						</tr>
					</thead>
					<tbody>
						<Row name="Peter" department="Web"></Row>
						<Row name="Sachin" department="Compititive"></Row>
					</tbody>
				</table>

		)
	}
}
export default EmployeeTable;