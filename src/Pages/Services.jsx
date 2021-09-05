import React from 'react';
import Card from './Card';
import ServiceData from './ServiceData';



const Services =()=>{


    return (
        <>
          <h3 className="text-center head">Our Services</h3>
          <div className="container">
              <div className="row gy-2 gx-5">

              {
                ServiceData.map((v)=><Card title={v.title}  des={v.des}  img={v.img} key={v.id}/>)
              }
                  
              </div>
          </div>
        </>
    );
}

export default Services;