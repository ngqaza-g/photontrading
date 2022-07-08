import React from 'react'



const Lights=()=>{

    const data=[
       
        {
            id: 11121,
            name:"Solar Street Lights",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1628799576/enrollment%20scanners/addOns/npnca3mvvyzevnwzyq18.jpg",
             Url:"/Decorativelights"
         },
    
         {
             id:12122,
            name:"Motion Detectors",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1628799892/enrollment%20scanners/addOns/images_uztnq1.jpg",
             Url:"/Motiondetectorss"
         },
    
         {
             id: 13123,
            name:"Decorative Lights",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1628799663/enrollment%20scanners/addOns/images_dlosjg.jpg",
             Url:"/Decorativelights"
         },
    
         {
            id: 14124,
             name:"Flood Lights",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1628799826/enrollment%20scanners/addOns/images_n7emhe.jpg",
             Url:"/FloodLights"
         },

         {
            id: 14126,
             name:"LED Lights",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1628799958/enrollment%20scanners/addOns/images_yoqvby.jpg",
             Url:"/LedLights"
         },

         {
            id: 14125,
             name:"Portable  Lights",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1628799711/enrollment%20scanners/addOns/dplxidxruuqryvnvvubi.jpg",
             Url:"/PortableLights"
         },
    
    
       
    ]

    return(
        <div className="row ">
                {data.map((data)=>
                <div className="categoriesdiv col-sm-6 col-md-6 col-lg-2 my-3 center">
                <a className="catlinks " href={data.Url}><div className=" CategoryCard  row" key={data.id}>
              
            <div className="card bg-dark  text-white  " id="categoryCard07" >
              <img src={data.image} className=" flex d-flex flex-column flex-wrap" id="categoryimg08" alt="categories"/>
              <div className="card-img-overlay overlay">
                <h5 className="card-title CategoryCardTitle text-center">{data.name}</h5>
              
              </div>
            </div>
          </div>
          </a></div>)}
        
          </div>
        
            );
               
}

export default Lights;