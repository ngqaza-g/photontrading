import React, { Fragment, useState, useEffect } from 'react'



const ElectricFencing=()=>{

    const data=[
        {
            id: 1011,
            name:"Energizers",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624985553/products2/electric%20fencing/Energizers/energizer-druid-18-lcd-8-joule_cifzxl.jpg",
             Url:"/Energizers"
         },

         {
             id: 1021,
             name:"fencing Accesories",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624981468/products2/fire%20accessories/Fire%20Alarm%20Accessories/ziton-surface-mount-sensor-base-polar-white-zp7-sb1-p_hwdaol.jpg",
             Url:"/FencingAccesories"
         },

         {
             id:1031,
            name:"Fencing Brackets",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624987445/products2/fencing%20Brackets/Fencing%20Brackets/fence-pole-6line-low-profile-black_c03iig.jpg",
             Url:"/FencingBrackets"
         },

         {
             id: 1041,
            name:"fencing wire & cables",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624987785/products2/fencing%20wire%20and%20cables/Fencing%20Wire%20and%20Cables/wire-aluminium-16mm-x-1000m-solid_eu1usm.jpg",
             Url:"/fencingwirecables"
         }
       
    ]

    
    return(
        <div className="row ">
                {data.map((data)=>
                <div className="categoriesdiv col-sm-6 col-md-6 col-lg-2 my-3 center">
                <a className="catlinks " href={data.Url}><div className=" CategoryCard  row" key={data.id}>
              
            <div className="card bg-dark  text-white  " id="categoryCard05"  >
              <img src={data.image} className=" flex d-flex flex-column flex-wrap" id="categoryimg05" alt="categories"/>
              <div className="card-img-overlay overlay">
                <h5 className="card-title CategoryCardTitle text-center">{data.name}</h5>
              
              </div>
            </div>
          </div>
          </a></div>)}
        
          </div>
        
            );
               
}

export default ElectricFencing;