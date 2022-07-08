import React, { Fragment, useState, useEffect } from 'react'
import categoryCard from './categoryCard';



const AccessControl=()=>{

    const data=[
      {   
        id: 11,
       name:"Garage doors",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1624963326/products2/centurion-gdo-sdo4-t12-sectional-kit-incl-2x4-button-tx-and-battery_sqbgzr.jpg",
        Url:"/Garagedoors"
    },

    { 
        id: 21,
        name:"Sliding Gate Motors",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1624964186/products2/sliding%20gate%20motors/d5-evo-motor-kit-incl-2-x-nova-tx-rx-battery-4m-steel-rack_ouchkm.jpg",
        Url:"/SlidingGateMotors"
    },
    
    {
        id: 31,
       name:"Traffic Barriers",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1624964715/products2/traffic%20barriers/sector-ii-dc-barrier-3m-430ss-incl-sa-loop-detector-and-pole_lnxdnm.jpg",
        Url:"/TrafficBarriers"
    },

    {
        id: 41,
       name:"Door Closers",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1625051723/products2/door%20closers/Door%20Closers/door-closer-medium-duty-25-45kg-with-hold-open-function_tbl11t.jpg",
        Url:"/DoorClosers"
    },

    {
        id: 51,
        name:"Electric Door Strikes",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1625052434/products2/electric%20strikes/Electric%20Door%20Strikes/electric-door-strikes_sfufwl.jpg",
        Url:"/ElectricDoorStrikes"
    },
   

    {
        id: 61,
       name:"Electric Locks",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1625052632/products2/electric%20locks/Electric%20Locks/elock-indoor-maglock-1200lbs-544kg-12-24vdc-monitored-with-led_rdgjbi.jpg",
        Url:"/ElectricLocks"
    },

    {
        id: 71,
       name:"Take-On Readers",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1625083225/products2/Take-On%20Readers/Take-On%20Readers/zkteco-ur10-take-on-reader-uhf-usb_bd4tjn.jpg",
        Url:"/TakeOnReaders"
    },

    {
        id: 81,
       name:"Readers",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1625083854/products2/take-on%20readerss/Readers/paxton-net2-reader-universal-clock-and-data_ao8sx3.jpg",
        Url:"/Readers"
    },

    
    {
        id: 91,
       name:"Keypad Readers",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1625085456/products2/keypad%20readers/Keypad%20Readers/paxton-net2-keypad-touchlock-vandal-resistant_qpctwx.png",
        Url:"/KeypadReaders"
    },
   
    {
        id: 101,
        name:"Inspection",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1625088040/products2/inspection01/Inspection/zkteco-d1065s-walkthrough-metal-detector-6-zone_bsgdvd.jpg",
        Url:"/Inspection"
    },

    {
        id: 111,
       name:"Exit Buttons",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1625088313/products2/exit%20buttons/Exit%20Buttons/push-button-heavy-duty-r-st-15-n-c_kaqtdk.jpg",
        Url:"/ExitButtons"
    },

    {
        id: 121,
       name:"Entrance Control",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1625088570/products2/entrance%20control/Entrance%20Control/zkteco-ts2000-turnstile-waiste-high-drop-arm_qz4rdz.jpg",
        Url:"/EntranceControl"
    },

    {
        id: 121,
       name:"Enrollment Scanners",
        image:"https://res.cloudinary.com/photontrading/image/upload/v1625089151/enrollment%20scanners/Enrollment%20Scanners/zkteco-zk9500-enrollment-fingerprint-bioid-usb_vzphcv.jpg",
        Url:"/EnrollmentScanners"
    }
       
    ]

    return(
        <div className="row ">
                {data.map((data)=>
                <div className="categoriesdiv col-sm-6 col-md-6 col-lg-2 my-3 center">
                <a className="catlinks " href={data.Url}><div className=" CategoryCard  row" key={data.id}>
              
            <div className="card bg-dark  text-white  " id="categoryCard01">
              <img src={data.image} className=" flex d-flex flex-column flex-wrap " id="categoryimg01" alt="categories"/>
              <div className="card-img-overlay overlay">
                <h5 className="card-title CategoryCardTitle text-center">{data.name}</h5>
              
              </div>
            </div>
          </div>
          </a></div>)}
        
          </div>
        
            );
               
    
}

export default AccessControl;

