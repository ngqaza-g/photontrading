import React from 'react'



const HomeAutomation=()=>{

    const data=[
       
        {
            id: 111,
            name:"Home Automation Sensors",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624965832/products2/baluns%20and%20hubs/Baluns%20and%20Hubs/baluns-and-hubs_ozer3b.jpg",
             Url:"/HomeAutomationControllers"
         },
    
         {
             id:121,
            name:"Home Automation Controllers",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1628800057/enrollment%20scanners/addOns/images_jbwobt.jpg",
             Url:"/HomeAutomationSensors"
         },
    
         {
             id: 131,
            name:"Home Automation Accessories",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1628800650/enrollment%20scanners/addOns/images_btlsdj.jpg",
             Url:"/HomeAutomationSensors"
         },
    
         {
            id: 141,
             name:"Home Automation Network",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1628800223/enrollment%20scanners/addOns/images_thi6yk.jpg",
             Url:"/HomeAutomationNetwork"
         },

         {
            id: 141,
             name:"Home Automation Switches",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1628800106/enrollment%20scanners/addOns/images_s1lzhm.jpg",
             Url:"/HomeAutomationSwitches"
         },
           
         {
          id: 141,
           name:"Home Automation Sensors",
           image:"https://res.cloudinary.com/photontrading/image/upload/v1628800020/enrollment%20scanners/addOns/images_chwrzs.jpg",
           Url:"/HomeAutomationSensors"
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

export default HomeAutomation;