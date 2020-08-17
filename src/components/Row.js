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
	  	function handleToggleAvailability(e)
	  	{
	  		console.log("toggle")
	  		let temp=empDetail
	  		temp.availability=empDetail.availability?false:true
	  		editEmployee(temp)
	  	}
		return (


				<tr>
					<td>{empDetail.name}</td>
					<td>{empDetail.age}</td>
			        <td>{empDetail.gender}</td>
     
					<td>{empDetail.department}</td>

					<td>{empDetail.designation}</td>
					<td>
						<div className="custom-control custom-checkbox">
							<input type="checkbox" defaultChecked={check} onChange={handleToggleAvailability} className="custom-control-input" id={empDetail.id}/ >
							<label className="custom-control-label"  htmlFor={empDetail.id}></label>
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