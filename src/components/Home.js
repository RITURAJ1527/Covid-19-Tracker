import React, {Component } from 'react';
import axios from 'axios';
import {
  BrowserView,
  MobileView
} from "react-device-detect";

import Summary2 from './Summary2';
import Navbar from './Navbar';
import States from './States';
import Footer from './Footer';
import whatsapp from './whatsapp.svg';

class Home extends Component{

	state = {
		cases_time_series: [],
		states:[],
		lastUpdatedDate : null,
		loading : true,
		summary : null
	}
	async componentDidMount() {
		try {
			const res1 = await axios.get("https://api.rootnet.in/covid19-in/stats/latest");
			const { regional, summary } = res1.data.data;
			const lastUpdatedDate = res1.data.lastRefreshed;
			const active = res1.data.data["unofficial-summary"][0]?.active;
			this.setState({
			  states: regional,
			  lastUpdatedDate,
			  loading: false,
			  summary: { ...summary, active },
			});
		  } catch (error) {
			console.error("Error fetching data:", error);
			this.setState({ loading: false });
		  }
	}

  render(){
  	if(this.state.loading){
  		return(
  			<div style={{textAlign:"center"}}>
	  			<h1 >Loading...</h1>
	  			<h5>If it takes too long for loading, kindly check your internet connection.</h5>
  			</div>
  		)
  	}
	return (
	  	<div>
	  		<Navbar/>
	  		<Summary2 summary = {this.state.summary} lastUpdatedDate = {this.state.lastUpdatedDate}/>	
	    	<table>
	    		<thead>
	    			<tr>
			    		<th> State(/UT) </th>
			    		<th> Active</th>
			    		<th> Total Confirmed</th>
			    		<th> Total Deaths</th>
			    		<th> Total Recovered</th>
			    	</tr>
				</thead>
				<tbody>
					{this.state.states.map( state => (
						<States states = {state} key = {state.loc}/>
					))}
				</tbody>
    		</table>
    		<Footer/>
    		<BrowserView>
	    		<div className="fixed-bottom" style={{textAlign:"right"}}>
	    			<a href="https://web.whatsapp.com/send?phone=918290277481"> <img src={whatsapp} alt="Whatsapp"/>
					</a>
	    		</div>
	    	</BrowserView>
	    	<MobileView>
	    		<div className="fixed-bottom" style={{textAlign:"right"}}>
	    			<a href="https://wa.me/918290277481?text=Hi There"> <img src={whatsapp} alt="Whatsapp"/>
					</a>
	    		</div>
	    	</MobileView>

	    </div>
	);
}
}

export default Home;
