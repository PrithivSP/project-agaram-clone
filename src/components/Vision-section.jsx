import React, { Component } from 'react';
import './Vision-section.css'

class Vision extends Component {
    state = { 
        sectionTitle: 'Vision',
        sectionDescription: 'To bring about a significant positive change in the socio-economic status of the rural society by offering quality education to the deserving individual.'
     }
    render() { 
        return ( 
            <div className="container-box">
                <div className="content-box">
                    <h2> { this.state.sectionTitle } </h2>
                    <p> { this.state.sectionDescription } </p>
                </div>
            </div>
         );
    }
}
 
export default Vision;