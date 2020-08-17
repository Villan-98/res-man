import React,{Fragment,useState} from 'react'
function EmpForm()
{
	return (
		<>
		<div className="modal fade" id="addEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="addEmployeeModal"
		aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-header pt-3 pb-2">
					<h5 className="modal-title" id="exampleModalCenterTitle">Add Employee</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form>
						<div className="form-row ">
							<div className="form-group col-md-6">
								<label for="" className="mb-1">Name</label>
								<input type="text" className="form-control" id="" placeholder="Enter"/>
							</div>
							<div className="form-group col-md-6">
								<label for="" className="mb-1">Gender</label>
								<select className="form-control" id="exampleFormControlSelect1">
									<option>Select</option>
									<option>Male</option>
									<option>Female</option>
								</select>
							</div>
							<div className="form-group col-md-6">
								<label for="" className="mb-1">Age</label>
								<input type="text" className="form-control" id="" placeholder="Enter"/>
							</div>
							<div className="form-group col-md-6">
								<label for="" className="mb-1">Designation</label>
								<input type="text" className="form-control" id="" placeholder="Enter"/>
							</div>
							<div className="form-group col-md-6">
								<label for="" className="mb-1">Department</label>
								<input type="text" className="form-control" id="" placeholder="Enter"/>
							</div>
							<div className="form-group col-md-6">
								<label for="" className="mb-1">Joining Date</label>
								<input type="date" className="form-control" id="" placeholder=""/>
							</div>
						</div>
					</form>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="modal">Cancel</button>
					<button type="button" className="btn btn-success btn-sm">Save</button>
				</div>
			</div>
		</div>
	</div>
		</>
	)
}
export default EmpForm