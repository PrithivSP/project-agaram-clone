import React, { Component } from 'react';
import './OMTheTrust.css';
// importing bootstrap css
import "bootstrap/dist/css/bootstrap.css";

class TheTrust extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="parallax1">
                <h1 className="trust-h1"><span>The </span>Trust</h1>
                <p>Our mission is taken forward by our trust backed by the following accomplished individuals</p>

                <div className="row first">
                    <div className="col-sm-3 trusts">
                        <h5>Mr. R. S. Surya </h5>
                        <p>Founder Trustee</p> 
                    </div>
                    <div className="col-sm-3 trusts">
                        <h5>Mr. Si. Karthi</h5>
                        <p>Trustee</p>
                    </div>
                    <div className="col-sm-3 trusts">
                        <h5>Mr. T. J. Gnanavel</h5>
                        <p>Secretory Trustee</p>
                    </div>
                </div>
                <div className="row second">
                    <div className="col-sm-3 trusts">
                        <h5>Ms. JaishreeDamodaran</h5>
                        <p>Secretary</p>
                    </div>
                    <div className="col-sm-3 trusts">
                        <h5>Mr. S. R. Prakash Babu</h5>
                        <p>Treasurer</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default TheTrust;