import React, {Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

class Footer extends Component{

  render(){
  return (
    <div>
        <section id="footer">
    <div className="container">
      <div className="row text-center text-xs-center text-sm-left text-md-left">
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul className="list-unstyled quick-links">
            <li><a href="https://www.who.int/"><i className="fa fa-angle-double-right"></i>Important Links for COVID-19</a></li>
          </ul>
        </div>
        <hr/>
      </div>  
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <button type="button" className="btn btn-danger btn-rounded btn-icon"><a href="https://www.linkedin.com/in/ritu-raj-1v527/"> <i className="fab fa-linkedin"></i></a> </button> 
            <button type="button" className="btn btn-info btn-rounded btn-icon"><a href="https://github.com/RITURAJ1527"> <i className="fab fa-github-square"></i></a> </button> 
        </div>
        <hr/>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p>Designed and developed by :</p><h4><strong>RITURAJ</strong></h4>
          <p className="h6">©copy All right Reversed.</p>
        </div>
        <hr/>
      </div>  
    </div>
  </section>
    </div>
  );
}
}

export default Footer;
