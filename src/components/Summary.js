import React,{Fragment} from 'react'
function Summary()
{
	return (
		<>
			<div className="card mt-4 mb-3 mb-md-4">
				<div className="card-body p-3">
					<h5 className="text-secondary mb-2">Available: <span
							className="font-weight-bold ml-1 text-dark">08</span></h5>
					<h5 className="text-secondary">Total: <span className="font-weight-bold ml-1 text-dark">50</span>
					</h5>
					​
					<button className="btn btn-primary mt-4" data-toggle="modal" data-target="#addEmployeeModal">
						<i className="fa fa-plus"></i>&nbsp; Add Employee</button>
				</div>
			</div>
			​
		</>
	)
}
export default Summary