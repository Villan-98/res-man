import React,{Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button,Form,Row,Col} from 'react-bootstrap'
class FormModal extends Component
{
	// const [show, setShow] = useState(false);
	constructor(props)
	{
		super(props)
		console.log(props.employees)
		this.state={
			show:false,
			id:props.editEmployee? props.empDetail.name:"",

			name:props.editEmployee? props.empDetail.name:"",

			gender:props.editEmployee? props.empDetail.gender:"",

			age:props.editEmployee? props.empDetail.age:0,

			designation:props.editEmployee? props.empDetail.designation:"",

			department:props.editEmployee? props.empDetail.department:"",

			joiningDate:props.editEmployee? props.empDetail.joiningDate:"",

			availability:true,

			buttonName:props.editEmployee?"Edit":"Add Employee",

			modalHeading:props.editEmployee?"Edit Detail":"Add Employee",

			employeeData:props.employees,
		
		}
		console.log(props.editEmployee)
		this.handleSave=this.handleSave.bind(this)
		this.handleNameChange=this.handleNameChange.bind(this)
		this.handleDesignationChange=this.handleDesignationChange.bind(this)
		this.handleAgeChange=this.handleAgeChange.bind(this)
		this.handleDateChange=this.handleDateChange.bind(this)
		this.handleGenderChange=this.handleGenderChange.bind(this)
		this.handleDepartmentChange=this.handleDepartmentChange.bind(this)
		this.handleUpdate =this.handleUpdate.bind(this)
	}
  	handleClose = () => this.setShow(false);
  	handleShow = () => this.setShow(true);
 	
  	setShow(val)
  	{

  		this.setState({
  			show:val
  		})
  	}
  	handleDateChange(e)
  	{
  		console.log(e.target.value)
  		this.setState({
  			joiningDate:e.target.value
  		})
  	}
  	handleNameChange(e)
  	{
  		console.log(e.target.value)
  		this.setState({
  			name:e.target.value
  		})
  	}
  	handleAgeChange(e)
  	{
  		console.log(e.target.value)
  		this.setState({
  			age:e.target.value
  		})
  	}
  	handleDesignationChange(e)
  	{
  		console.log(e.target.value)
  		this.setState({
  			designation:e.target.value
  		})
  	}
  	handleGenderChange(e)
  	{
  		console.log(e.target.value)
  		this.setState({
  			gender:e.target.value
  		})
  	}

  	handleDepartmentChange(e)
  	{
  		console.log(e.target.value)
  		this.setState({
  			department:e.target.value
  		})
  	}
  	handleSave(e)
  	{
  		if(this.state.name.length===0 || this.state.department.length==0||this.state.designation.length===0
  			||this.state.joiningDate.length===0)
  		{
  			alert("Please fill the input boxes")

  		}
  		else if (this.state.age.length===0||this.state.age===0)
  		{
  			alert("Please fill valid value of age")
  		}
  		else 
  		{
  			this.props.addNewEmployee({
  			'name':this.state.name,
  			'availability':true,
  			'department':this.state.department,
  			'doj':this.state.joiningDate,
  			'designation':this.state.designation,
  			'age':this.state.age,
  			'id':Math.random()

	  		})
	  		this.setState({
	  			show:false
	  		})
  		}
  		
  	}
  	handleUpdate(e)
  	{
  		console.log("in the update")
  		this.props.editEmployeeFun({
  			'name':this.state.name,
  			'availability':true,
  			'department':this.state.department,
  			'doj':this.state.joiningDate,
  			'designation':this.state.designation,
  			'age':this.state.age,
  			'id':this.state.id
  		})
  		this.setState({
  			show:false
  		})
  	}
  	
  	render()
  	{
  		return (
		    <>
		      <Button variant="primary" onClick={this.handleShow}>
		        {this.state.buttonName}
		      </Button>

		      <Modal show={this.state.show} onHide={this.handleClose}>
		        <Modal.Header closeButton>
		          <Modal.Title>{this.state.modalHeading}</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        <Form>
				  <Form.Row>
				    <Form.Group as={Col} controlId="empName">
				      <Form.Label>Name</Form.Label>
				      <Form.Control type="text" value={this.state.name}  onChange={this.handleNameChange} placeholder="Name" />
				    </Form.Group>
			    	<Form.Group as={Col} controlId="empGender">
					    <Form.Label>Gender</Form.Label>
					    <Form.Control value={this.state.gender} onChange={this.handleGenderChange} as="select">
					      <option value="">Select</option>
					      <option value="Male">Male</option>
					      <option value="Female">Female</option>
					    </Form.Control>
				  	</Form.Group>

				  </Form.Row>

				  <Form.Row>
				    <Form.Group as={Col} controlId="empAge">
				      <Form.Label>Age</Form.Label>
				      <Form.Control value={this.state.age} onChange={this.handleAgeChange} type="number" placeholder="Age" />
				    </Form.Group>

				    <Form.Group as={Col} controlId="empDesignation">
				      <Form.Label>Designation</Form.Label>
				      <Form.Control value={this.state.designation} onChange={this.handleDesignationChange} type="text" placeholder="Designation" />
				    </Form.Group>
				  </Form.Row>
				  <Form.Row>
					  <Form.Group as={Col} controlId="empDevelopment">
						    <Form.Label>Department</Form.Label>
						    <Form.Control value={this.state.department} onChange={this.handleDepartmentChange} as="select">
						      <option value="">Select</option>
						      <option value="Frontend Development">Frontend Development</option>
						      <option value="Backend Development">Backend Development</option>
						      <option value="Testing">Testing</option>
						      <option value="Deployment">Deployment</option>
						    </Form.Control>
					  	</Form.Group>

				    <Form.Group as={Col} controlId="empJoiningDate">
				      <Form.Label>Joining Date</Form.Label>
				      <Form.Control value={this.state.joiningDate} onChange={this.handleDateChange} type="date"/>
				    </Form.Group>
				  </Form.Row>
				</Form>
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="success" onClick={this.props.editEmployee? this.handleUpdate:this.handleSave}>
		            Success
		          </Button>
		          <Button variant="danger" onClick={this.handleClose}>
		            Close
		          </Button>
		        </Modal.Footer>
		      </Modal>
		    </>
		  );
  	}
  
}
export default FormModal