import React,{Component,Fragment} from 'react'
import {Form,Button} from 'react-bootstrap'
class SearcBar extends Component{
	constructor()
	{
		super()
		this.state={
			query:""
		}
		this.handleChange=this.handleChange.bind(this)
	}
	handleChange(e)
	{
		this.setState({
			query:e.target.value
		})
	}
	handleSearch=(e)=>{
		console.log("clicked")

		this.props.searchResultFun({pat:this.state.query})
	}
	render(){
		return(
			<>
			<Form.Control type="text" value={this.state.query} onChange={this.handleChange}placeholder="Search" />
			<Button onClick={this.handleSearch} variant="primary">Search</Button>
			</>
		)
	}
}
export default SearcBar