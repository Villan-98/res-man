import React,{Component,Fragment} from 'react'
import {Form,Button} from 'react-bootstrap'
class PageButton extends Component{
	constructor(props)
	{
		super(props)
		this.state={
			pno:props.pageNo,
		}
		this.handleChange=this.handleChange.bind(this)
	}
	handleChange(e)
	{
		this.setState({
			pno:e.target.value
		})
	}
	handlePageNo=(e)=>{
		
			this.props.showPage({
				pno:this.state.pno
			})
		
	}
	render(){
		return(
			<>
			<Form.Control type="number" value={this.state.pno} onChange={this.handleChange}placeholder="Search" />
			<Button onClick={this.handlePageNo} variant="primary">Search</Button>
			</>
		)
	}
}
export default PageButton