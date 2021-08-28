import React, { Component } from 'react';
import './parallax.css'
class Parallax extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="parallax">
                    <h1>Your Small Help 
                        <span className="span-will"> will </span>  
                        <span>#change</span>
                        <span className="span-a">a</span>
                        <span>life</span>
                    </h1>
                </div>
            </div>
         );
    }
}
 
export default Parallax;