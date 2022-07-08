import React from 'react'



const AirCons=()=>{

    const data=[
        {
            id: 2081,
             name:"Mildwall Split-Non Inverter",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625091474/products2/non%20inverter/non%20inv/sirair9000_zeeklf.jpg",
             Url:"/MildwallSplitNonInverter"
         },
         
         {
             id: 2091,
             name:"Midwall Split Inverter",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625092207/products2/inverter%20aircons/inv/12000_my6lwi.jpg",
             Url:"/MidwallSplitInverter"
         },
         
         {
             id: 20101,
             name:"Cassette-Non Inverter",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625093050/products2/cassette/cassette/sir60000_uw7yhy.jpg",
             Url:"/MidwallSplitInverter"
         },
    
           
         {
             id: 20111,
            name:"Air Curtain",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625383668/products2/cassette/Air%20Curtains/air-curtain-grid-photo_edrf4p.png",
             Url:"/AirCurtain"
         }
    ]

    
    return(
<div className="row ">
        {data.map((data)=>
        <div className="categoriesdiv col-sm-6 col-md-6 col-lg-2 my-3 center">
        <a className="catlinks " href={data.Url}><div className=" CategoryCard  row" key={data.id}>
      
    <div className="card bg-dark  text-white  " id="categoryCard02" >
      <img src={data.image} className=" flex d-flex flex-column flex-wrap" id="categoryimg02" alt="categories"/>
      <div className="card-img-overlay overlay">
        <h5 className="card-title CategoryCardTitle text-center">{data.name}</h5>
      
      </div>
    </div>
  </div>
  </a></div>)}

  </div>

    );
        }


export default AirCons
