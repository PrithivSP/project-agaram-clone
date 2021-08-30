import React, { Component } from 'react';
import './OMParallax.css';
// importing bootstrap css
import "bootstrap/dist/css/bootstrap.css";

class OMParallax extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="parallax">
                <h1>Help educate a child to help a family  
                    <span>#change</span>
                    <span id="span-a">a</span>
                    <span>life</span>
                </h1>
            </div>
         );
    }
}
 
export default OMParallax;