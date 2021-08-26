import React, { Component } from 'react';
import './banner.css';
class Banner extends Component {
    state = {  }
    render() { 
        return ( 
            
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://s1.agaram.in/img/webp-img/agaram_slider-s2.webp" className="d-block w-100 h-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src="https://s1.agaram.in/img/webp-img/agaram_slider-s1.webp" className="d-block w-100 h-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
            
         );
    }
}
 
export default Banner;