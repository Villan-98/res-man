import React ,{Component,Fragment}from 'react'

import EmployeeTable from './EmployeeTable'
class Dashboard extends Component{
	render()
	{
		return (
			<>
				<div class="row">
					<div class="col-12">
						<div class="question-dashboard">
							​
							<div class="table-responsive mt-3 mt-md-4 mb-2">
								<EmployeeTable/>
							</div>
						</div>
					</div>
				</div> 
			</>
		)
	}
}
export default Dashboard