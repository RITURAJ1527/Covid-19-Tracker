import React, {Component } from 'react';

class Summary2 extends Component{
	
	render(){
		const {summary, lastUpdatedDate} = this.props;
		return (
			<div>
				<h3 style={{color:"#00cc00", textAlign:"center"}}>India Status</h3>
				<h1 style={{textAlign:"center"}}>Last updated on : <strong >{lastUpdatedDate}</strong></h1>
		  		<div className="row1">
		  			<div className="NewConfirmed">
		  				<h3>Active</h3>
		  				<h1>{summary?.active}</h1>
		  			</div>

		  			<div className="TotalConfirmed">
		  				<h3>Total Confirmed</h3>
		  				<h1>{summary?.total}</h1>
		  			</div>

		  			<div className="NewDeaths">
		  				<h3>Deaths</h3>
		  				<h1>{summary?.deaths}</h1>
		  			</div>

		  			<div className="TotalRecovered">
		  				<h3>TotalRecovered</h3>
		  				<h1>{summary?.discharged}</h1>
		  			</div>
		    	</div>
	    	</div>
		);
	}
}

export default Summary2;