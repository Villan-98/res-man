import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button,Form,Row,Col} from 'react-bootstrap'
function FormModal()
{
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
  	//const handleSave

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
		  <Form.Row>
		    <Form.Group as={Col} controlId="formGridEmail">
		      <Form.Label>Name</Form.Label>
		      <Form.Control type="text" placeholder="Name" />
		    </Form.Group>


	    	<Form.Group as={Col} controlId="exampleForm.ControlSelect1">
			    <Form.Label>Example select</Form.Label>
			    <Form.Control as="select">
			      <option>Select</option>
			      <option>Male</option>
			      <option>Female</option>
			    </Form.Control>
		  	</Form.Group>

		  </Form.Row>

		  <Form.Row>
		    <Form.Group as={Col} controlId="formGridEmail">
		      <Form.Label>Age</Form.Label>
		      <Form.Control type="text" placeholder="Age" />
		    </Form.Group>

		    <Form.Group as={Col} controlId="formGridPassword">
		      <Form.Label>Designation</Form.Label>
		      <Form.Control type="text" placeholder="Designation" />
		    </Form.Group>
		  </Form.Row>
		  <Form.Row>
			  <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
				    <Form.Label>Department</Form.Label>
				    <Form.Control as="select">
				      <option>Select</option>
				      <option>Frontend Development</option>
				      <option>Backend Development</option>
				      <option>Testing</option>
				      <option>Deployment</option>
				    </Form.Control>
			  	</Form.Group>

		    <Form.Group as={Col} controlId="formGridPassword">
		      <Form.Label>Joining Date</Form.Label>
		      <Form.Control type="date"/>
		    </Form.Group>
		  </Form.Row>
		</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Success
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default FormModal