import React from 'react'
function Row(props)
{
	
		return (


				<tr>
					<td>{props.name}</td>
					<td>{props.department}</td>
					<td>
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="customCheck2"/ >
							<label className="custom-control-label" for="customCheck2"></label>
						</div>
					</td>

					<td>
						<button type="button" className="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal">
							<i class="fa fa-edit"></i>&nbsp; Edit
		                    </button>
		                    <button type="button" className="btn btn-outline-danger btn-sm">
							<i className="fa fa-trash"></i>&nbsp; Delete
						</button>
					</td>
				</tr>
	)
}
export default Row;