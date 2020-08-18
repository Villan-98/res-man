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
			<div class="d-flex justify-content-center border">
				<div class="row">
					<div class="col-4 my-2">
					<input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Enter Page No." />
					<Button  className="my-2"onClick={this.handleSearch} variant="primary">Search</Button>
					</div>
				</div>
			
			</div>	
			</>
		)
	}
}
export default PageButton