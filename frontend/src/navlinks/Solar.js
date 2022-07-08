import React, { Fragment, useState, useEffect } from 'react'



const Solar=()=>{

    const data=[
        {
            id: 222201,
            name:"Inveters",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1627141580/products2/cartegory/phocusinv_g74b3s.png",
             Url:"/Inveters"
         }, 
    
         {
            id:222202,
             name:"Batteries",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1627141559/products2/cartegory/pylontech_battery_hdysbv.png",
             Url:"/Batteries"
         }, 
    
         {
            id:222203,
            name:"Accessories",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1627141556/products2/cartegory/DC_Breakers_762c142f-8951-4ad2-8395-16e7a28d9b75_fyxk0f.jpg",
             Url:"/Accessories"
         }
    
    
    ]

    
    return(
      <div className="row ">
              {data.map((data)=>
              <div className="categoriesdiv col-sm-6 col-md-6 col-lg-2 my-3 center">
              <a className="catlinks " href={data.Url}><div className=" CategoryCard  row" key={data.id}>
            
          <div className="card bg-dark  text-white  "  id="categoryCard09" >
            <img src={data.image} className=" flex d-flex flex-column flex-wrap" id="categoryimg010" alt="categories"/>
            <div className="card-img-overlay overlay">
              <h5 className="card-title CategoryCardTitle text-center">{data.name}</h5>
            
            </div>
          </div>
        </div>
        </a></div>)}
      
        </div>
      
          );
             
}

export default Solar;
