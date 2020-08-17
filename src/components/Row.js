import React from 'react'
import FormModal from './FormModal'
function Row({empDetail,editEmployee,deleteEmployeeFun})
{
		const check=(empDetail.availability)?"checked":"";
		const flag=true;
		function handleDelete(e)
	  	{
	  		console.log("in Delete")
	  		deleteEmployeeFun({
	  			'id':empDetail.id
	  		})
	  	}
		return (


				<tr>
					<td>{empDetail.name}</td>
					<td>{empDetail.department}</td>
					<td>
						<div className="custom-control custom-checkbox">
							<input type="checkbox" defaultChecked={check} className="custom-control-input" id="customCheck2"/ >
							<label className="custom-control-label" htmlFor="customCheck2"></label>
						</div>
					</td>

					<td>
							<FormModal editEmployee={flag} empDetail={empDetail} editEmployeeFun={editEmployee}/>
		                    <button type="button" onClick={handleDelete} className="btn btn-outline-danger btn-sm">
								Delete
						</button>
					</td>
				</tr>
	)
}
export default Row;