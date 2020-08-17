import React from 'react'
import FormModal from './FormModal'
function Row({empDetail,editEmployee})
{
		const check=(empDetail.availability)?"checked":"";
		const flag=true;
		
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
		                    <button type="button" className="btn btn-outline-danger btn-sm">
							<i className="fa fa-trash"></i>&nbsp; Delete
						</button>
					</td>
				</tr>
	)
}
export default Row;