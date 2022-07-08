import React, { Fragment, useState, useEffect } from 'react'



const Intercoms=()=>{

    const data=[
        {
            id: 2031,
            name:"Analogue Video Intercoms",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625078980/products2/Analogue%20video%20intercoms/Analogue%20Video%20Intercoms/nice-7-colour-video-intercom-kit-incl-die-cast-aluminium-gate-station_et3lwy.jpg",
             Url:"/AnalogueVideoIntercoms"
         },
    
         {
             id: 2041,
             name:"Audio Intercoms",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625079724/products2/Audio%20Intercoms/Audio%20Intercoms/polo-handset_drz1if.jpg",
             Url:"/AudioIntercoms"
         },
         
         {
             id: 2051,
             name:"GSM Intercoms",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625080289/products2/gsm%20intercomms/GSM%20Intercoms/centurion-g-speak-ultra-gsm-2-button-intercom-system_nelwa3.jpg",
             Url:"/GSMIntercoms"
         },
    
         {
             id: 2061,
             name:"IP Intercom Accessories",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625082089/products2/ip%20intercom%20accessories/IP%20Intercom%20Accessories/ip-intercom-accessories_my575c.jpg",
             Url:"/IPIntercomAccessories"
         },
    
         {
             id: 2071,
             name:"IP Video Intercoms",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625082705/products2/ip%20video%20intercoms/IP%20Video%20Intercoms/hikvision-7-touch-screen-indoor-station-2nd-generation_m7oaki.jpg",
             Url:"/IPVideoIntercoms"
         }
    
    
       
    ]

    
    return(
        <div className="row ">
                {data.map((data)=>
                <div className="categoriesdiv col-sm-6 col-md-6 col-lg-2 my-3 center">
                <a className="catlinks " href={data.Url}><div className=" CategoryCard  row" key={data.id}>
              
            <div className="card bg-dark  text-white  " id="categoryCard06">
              <img src={data.image} className=" flex d-flex flex-column flex-wrap" id="categoryimg07" alt="categories"/>
              <div className="card-img-overlay overlay">
                <h5 className="card-title CategoryCardTitle text-center">{data.name}</h5>
              
              </div>
            </div>
          </div>
          </a></div>)}
        
          </div>
        
            );
               
}

export default Intercoms;
