import React ,{Component,Fragment}from 'react'

import EmployeeTable from './EmployeeTable'
import Summary from '../components/Summary'

class Dashboard extends Component{
	render()
	{
		return (
			<>

				<div class="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="question-dashboard">
								​<Summary/>
								<div className="table-responsive mt-3 mt-md-4 mb-2">
									<EmployeeTable/>
								</div>
							</div>
						</div>
					</div> 
				</div>
			</>
		)
	}
}
export default Dashboard