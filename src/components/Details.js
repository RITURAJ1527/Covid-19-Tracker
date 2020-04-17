import React, {Component } from 'react';
import axios from 'axios';

import Summary from './Summary';
import Countries from './Countries';
import Navbar from './Navbar';
import Footer from './Footer';

class Details extends Component{

	state = {
		countries : [],
		global : [],
		currentDate : null,
		loading : true
	}

	async componentDidMount() {
		const res = await axios.get("https://api.covid19api.com/summary");
		console.log(res);
		this.setState({countries : res.data.Countries});
		this.setState({global : res.data.Global});
		this.setState({currentDate : res.data.Date});
		this.setState({loading : false});
	}

  render(){
  if(this.state.loading){
  	return (
  		<div style={{textAlign:"center"}}>
  			<h1 >Loading...</h1>
  			<h5>If it takes too long for loading, kindly check your internet connection.</h5>
  		</div>
  	);
  }
  return (
  	<div>
  		<Navbar/>
  		<Summary summary = {this.state.global} currentDate = {this.state.currentDate}/>
    	<table>
    		<thead>
    			<tr>
		    		<th> Country </th>
		    		<th> New Confirmed</th>
		    		<th> TotalConfirmed</th>
		    		<th> Total Deaths</th>
		    		<th> Total Recovered</th>
		    	</tr>
			</thead>
			<tbody>
				{this.state.countries.map( country => (
					<Countries countries = {country} key = {country.Country}/>
				))}
			</tbody>
    	</table>
    	<Footer/>
    </div>
  );
}
}

export default Details;