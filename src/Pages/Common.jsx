import React from 'react';
import Img from '../image/technical.jpg'


const Common =(props)=>{


    return (
        <>
          <div className="container">
              <div className="row mt-5">
                  <div className="col-md-6 order-md-1 order-2 align-self-center">
                      <h4>{props.name} <span className="text-primary">Paras Technical</span> </h4>
                      <p>we are the team of talented developer making website</p>
                      <button type="button" class="btn btn-outline-primary btn-sm get-started-button">{props.btnData}</button>
                  </div>
                  <div className="col-md-6 order-md-2 order-1 mt-md-0 mt-3">
                      <img src={Img} className="img" alt="Not Found.."/>
                  </div>
              </div>
          </div>
        </>
    );
}

export default Common;