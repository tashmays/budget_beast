class Bills extends React.Component{
	constructor(props){
		super(props);
		this.newBill = this.newBill.bind(this);
		this.state = { bills: [] };
	}

	componentDidMount(){
		$.ajax({
			url: '/bills',
			type: 'GET'
		}).success( data => {
			this.setState({ bills: data.bills });
		});
	}

	newBill(){
		$.ajax({
			url: '/bills',
			type: 'POST',
			data: { bill: { name: this.refs.newName.value, amount: this.refs.newAmount.value }}
		}).success( data => {
			let bills = this.state.bill;
			bills.unshift(data.bill);
			this.refs.newName.value = null;
			this.refs.newAmount.value = null;
			this.setState({ bills: bills });
		}).error(data => {
			console.log('error')
		});
	}

	render(){
		let bills = this.state.bills.map( bill => {
			let key = `bill-${bill.id}`;
			return(<Bill key={key} {...bill} />);
		});
		return(<div>
						 <input placeholder="Name of Bill" ref='newName' autoFocus={true} />
						 <input type='number' placeholder="Amount of Bill" ref='newAmount' autoFocus={true} />
						 <button className='btn' onClick={this.newBill}>Save</button>)
						 <hr />
						 <h1 className='center-text'>Bills</h1>
						 <hr />
						 {bills}
					 </div>);
	}
}