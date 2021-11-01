import React from 'react'
import bann from './Image/banner.jpg'
import '../Ban/Ban.css'

const Ban = () => {
    return (
        <div className="baninfo">
          
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>we are ready for giving good delivery service accorss the  whole country </h1>
                    </div>
                    <div className="col-md-6">
                        <img src={bann} alt="" />
                    </div>
                </div>
            </div>
          

        </div>
    )
}

export default Ban
