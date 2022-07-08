import React, { Fragment, useState, useEffect } from 'react'



const Networking=()=>{

    const data=[
       
        {
            id: 111,
            name:"Baluns & Hubs",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624965832/products2/baluns%20and%20hubs/Baluns%20and%20Hubs/baluns-and-hubs_ozer3b.jpg",
             Url:"/BalunsHubs"
         },
    
         {
             id:121,
            name:"HDMI",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624966000/products2/hdmi/HDMI/hdmi-super-mini-splitter-1-in-2-out-with-pigtail-4k-x-2k_d79uk7.jpg",
             Url:"/HDMI"
         },
    
         {
             id: 131,
            name:"Media Converters And PoE",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624966233/products2/Media%20Converters%20and%20PoE/Media%20Converters%20and%20PoE/utepo-poe-injector-gigabit-30watt_pugltf.png",
             Url:"/MediaConvertersAndPoE"
         },
    
         {
            id: 141,
             name:"Network Switch",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624968689/products2/Network%20Switches/Network%20Switches/utepo-8-port-10-100-poe-1-10-100-tp-uplink-switch_omywrr.png",
             Url:"/NetworkSwitch"
         },
    
         {
             id: 151,
            name:"Wireless and Wifi",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624978894/products2/wireless%20and%20wifi/Wireless%20and%20Wi-Fi/wis-5ghz-outdoor-wireless-dish-cpe-bridge-300mbps-80211n_bje5yc.png",
             Url:"/WirelessandWifi"
         },
    
         {
             id: 161,
            name:"Cabinets and Cabling",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624978891/products2/wireless%20and%20wifi/Wireless%20and%20Wi-Fi/wireless-and-wi-fi_tnhrxe.jpg",
             Url:"/CabinetsandCabling"
         }
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

export default Networking;
