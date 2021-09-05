import React from 'react';

const Card=(props)=>{


    return (<>

<div className="col-md-4">

<div class="card" >
  <img src={props.img} style={{height:'200px'}} class="card-img-top" alt="NOt found.."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.des}</p>
    <button  class="btn btn-primary">Go somewhere</button>
  </div>
</div>

</div>


    </>);
}

export default Card;