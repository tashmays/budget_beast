class Bill extends React.Component{
	constructor(props){
		super(props);
}

render(){
	return(<div>
				   <div className='card blue-grey darken-1'>
				     <div className='card-content white-text'>
				       <p>{this.props.name}</p>
				     </div>
				     <div className='card-action'>
				       <a onClick={this.userBills}>{this.props.amount}</a>
				     </div>
				   </div>
				 </div>);
	}
}
