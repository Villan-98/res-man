import React ,{Component,Fragment}from 'react'

import EmployeeTable from './EmployeeTable'
import Summary from '../components/Summary'

function Dashboard({employees,addNewEmployee,editEmployee}){
		return (
			<>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="question-dashboard">
							​<Summary employees={employees} addNewEmployee={addNewEmployee} availableEmployee={(employees.filter(emp=>emp.availability)).length} />
								<div className="table-responsive mt-3 mt-md-4 mb-2">
									<EmployeeTable editEmployee={editEmployee} employees={employees}/>
								</div>
							</div>
						</div>
					</div> 
				</div>
			</>
		)
	
}
export default Dashboard