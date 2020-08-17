import React from 'react'
function Row({empDetail})
{
		const check=(empDetail.availability)?"checked":"";
		
		return (


				<tr>
					<td>{empDetail.name}</td>
					<td>{empDetail.department}</td>
					<td>
						<div className="custom-control custom-checkbox">
							<input type="checkbox" defaultChecked={check} className="custom-control-input" id="customCheck2"/ >
							<label className="custom-control-label" for="customCheck2"></label>
						</div>
					</td>

					<td>
						<button type="button" className="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal">
							<i className="fa fa-edit"></i>&nbsp; Edit
		                    </button>
		                    <button type="button" className="btn btn-outline-danger btn-sm">
							<i className="fa fa-trash"></i>&nbsp; Delete
						</button>
					</td>
				</tr>
	)
}
export default Row;