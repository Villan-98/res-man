import React,{Fragment,useState} from 'react'
import Button from 'react-bootstrap/Button'

import Temp from './FormModal'
function Summary(props)
{
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	return (
		<>
			<div className="card mt-4 mb-3 mb-md-4">
				<div className="card-body p-3">
				
					<h5 className="text-secondary mb-2">Available: <span
							className="font-weight-bold ml-1 text-dark">{props.availableEmployee}</span></h5>
					<h5 className="text-secondary">Total: <span className="font-weight-bold ml-1 text-dark">{props.totalEmployee}</span>
					</h5>
					​<Temp/>
					</div>
			</div>

			​
		</>
	)
}
export default Summary