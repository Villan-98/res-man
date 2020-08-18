import React,{Fragement} from 'react'
import {Navbar} from 'react-bootstrap'
function Navs()
{
	return (
		<>
			
			<Navbar>
			  <Navbar.Brand href="#home">
			<img src="https://res.cloudinary.com/www-logic-square-com/image/upload/v1551945805/ls-logo.png"/>
			  </Navbar.Brand>
			  <Navbar.Toggle />
			  <Navbar.Collapse className="justify-content-end">
			    <Navbar.Text>
			      <h1>Resource Management System</h1>
			    </Navbar.Text>
			  </Navbar.Collapse>
			</Navbar>
	</>
	)
}
export default Navs