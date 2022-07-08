import React, { Fragment, useState, useEffect } from 'react'



const Pumps=()=>{

    const data=[
        {
            id: 2323401,
            name:"DC Pumps",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1627141557/products2/cartegory/dc_pump_v2lvdf.jpg",
             Url:"DCPumps"
         }, 
         {
            id:2323402 ,
            name:"AC Pumps",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1627141556/products2/cartegory/acc_pump_qnq0x7.jpg",
             Url:"/ACPumps"
         }
    ]

    
    return(
      <div className="row ">
              {data.map((data)=>
              <div className="categoriesdiv col-sm-6 col-md-6 col-lg-2 my-3 center">
              <a className="catlinks " href={data.Url}><div className=" CategoryCard  row" key={data.id}>
            
          <div className="card bg-dark  text-white  "id="categoryCard08" >
            <img src={data.image} className=" flex d-flex flex-column flex-wrap" id="categoryimg09" alt="categories"/>
            <div className="card-img-overlay overlay">
              <h5 className="card-title CategoryCardTitle text-center">{data.name}</h5>
            
            </div>
          </div>
        </div>
        </a></div>)}
      
        </div>
      
          );
             
}

export default Pumps;
