import React from 'react'
import '../Vision/Vision.css'
import ha1 from './happyimage/happay.3.jfif'
import ha2 from './happyimage/happay2.jfif'
import ha3 from './happyimage/happy1.jpg'


const Vision = () => {
    return (
        <div className="visioninfo">
            
            <h2>give review</h2>
            <div className="container">
                
                <div className="row">
                    <div className="col-md-4">
                        <img src={ha1} alt="" />
                        <h4>elon mask</h4>
                        <h4>took service :food delivery</h4>
                        <h4>review :best</h4>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div className="col-md-4">
                        <img src={ha2} alt="" />
                       <h4>steav jobs</h4>
                        <h4>took service:cloth delivery</h4>
                        <h4>review:excellent</h4>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div className="col-md-4">
                         <img src={ha3} alt="" />
                        <h4>mark jugarbrk</h4>
                        <h4>took service :logistic supprt</h4>
                        <h4>review :good</h4>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Vision
