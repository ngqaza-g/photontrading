import React, { Fragment, useState, useEffect } from 'react'



const FireAlarms=()=>{

    const data=[
        {
            id: 171,
             name:"Call Points",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624981320/products2/call%20points/Call%20Points/ziton-call-point-flush-mount-red-172165_e08vxj.jpg",
             Url:"/CallPoints"
         },
    
         {
             id: 181,
            name:"Fire Alarm Accesories",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624982542/products2/fire%20sirens/Fire%20Sirens/fire-sirens_upbsva.jpg",
             Url:"/FireAlarmAccesories"
         },
    
         {
             id: 191,
            name:"Fire Control Panels",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624982047/products2/Fire%20control%20Panel/Fire%20Control%20Panels/fire-control-panel-2-zone-conventional-1x-f2-99_gnsdcz.jpg",
             Url:"/FireControlPanels"
         },
    
         {
             id: 1101,
            name:"Fire Detectors",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624982153/products2/Fire%20detectors/Fire%20Detectors/ziton-optical-smoke-detector-conventional-z630-3p_tqvymz.jpg",
             Url:"/FireDetectors"
         }
    
    
       
    ]

    
    return(
        <div className="row ">
                {data.map((data)=>
                <div className="categoriesdiv col-sm-6 col-md-6 col-lg-2 my-3 center">
                <a className="catlinks " href={data.Url}><div className=" CategoryCard  row" key={data.id}>
              
            <div className="card bg-dark  text-white  "  id="categoryCard04">
              <img src={data.image} className=" flex d-flex flex-column flex-wrap"  id="categoryimg06" alt="categories"/>
              <div className="card-img-overlay overlay">
                <h5 className="card-title CategoryCardTitle text-center">{data.name}</h5>
              
              </div>
            </div>
          </div>
          </a></div>)}
        
          </div>
        
            );
               
}

export default FireAlarms;
