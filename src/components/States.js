import React, {Component } from 'react';
class States extends Component{

  render(){
  	const {states} = this.props;
  return (
  		<tr>
  			<td className="Country">{states.loc}</td>
  			<td className="NewConfirmed">{0}</td>
  			<td className="TotalConfirmed">{states.totalConfirmed}</td>
  			<td className="TotalDeaths">{states.deaths}</td>
  			<td className="TotalRecovered">{states.discharged}</td>
  		</tr>
  );
}
}

export default States;