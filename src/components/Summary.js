import React,{Fragment,useState} from 'react'
import Button from 'react-bootstrap/Button'

import Temp from './FormModal'
function Summary(props)
{
	return (
		<>
			<div className="card mt-4 mb-3 mb-md-4">
				<div className="card-body p-3">
				
					<h5 className="text-secondary mb-2">Available: <span
							className="font-weight-bold ml-1 text-dark">{props.availableEmployee}</span></h5>
					<h5 className="text-secondary">Total: <span className="font-weight-bold ml-1 text-dark">{props.employees.length}</span>
					</h5>
					​<Temp addNewEmployee={props.addNewEmployee} employees={props.employees}/>
					</div>
			</div>

			​
		</>
	)
}
export default Summary