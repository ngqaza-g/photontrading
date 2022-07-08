import React, { Fragment, useState, useEffect } from 'react'



const Alarms=()=>{

    const data=[
        {
            id: 111151,
             name:"Alarm control panels",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624982752/products2/Alarm%20Control%20panels/Alarm%20Control%20Panels/paradox-mg5050-k32-lcd-full-kit-pa9526_vcborl.jpg",
             Url:"/Alarmcontrolpanels"
         },
    
         {
             id: 111161,
            name:"Alarm Expanders",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624984023/products2/Alarm%20Expanders/Alarm%20Expanders/xwave-bus-16-wireless-zone-expander_qeenmr.jpg",
             Url:"/AlarmExpanders"
         },
    
         {
             id: 111171,
             name:"Alarm Keypads",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624984263/products2/Alarm%20keypads/Alarm%20Keypads/paradox-k32-lcd-32-zone-keypad-pa-3860_w04fb9.jpg",
             Url:"/AlarmKeypads"
         },
    
         {
             id: 111181,
            name:"Alarm System Detectors",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624984263/products2/Alarm%20keypads/Alarm%20Keypads/ids-xseries-16-zone-led-curve-series-keypad_hmofve.jpg",
             Url:"/AlarmSystemDetectors"
         },
    
         {
             id: 111191,
             name:"Alarm Accesories",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1624985193/products2/Alarm%20Accesories/Alarm%20Accessories/securi-prod-piezo-sounder-tweeter_l0lde4.jpg",
             Url:"/AlarmAccesories"
         },
    
         {
             id: 1111101,
             name:"CCTV Camera Brackets",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625053363/products2/cctv%20camera%20brackets/CCTV%20Camera%20Brackets/wall-mount-bracket-for-fixed-lens-dome-white_obpxwz.jpg",
             Url:"/CCTVCameraBrackets"
         },
    
         {
             id: 1111201,
             name:"CCTV Hard Drives",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625054659/products2/hard%20drive/cctv%20haard/CCTV%20Hard%20Drives/cctv-hard-drives_eq4ipp.jpg",
             Url:"/CCTVHardDrives"
         },
    
         {
             id: 1111301,
            name:"CCTV Monitors",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625054876/products2/cctv%20monitors/CCTV%20Monitors/cctv-monitor-23-led-wide-1920-x1080-vga-and-hdmi-incl-vesa-mount_ovodva.jpg",
             Url:"/CCTVMonitors"
         },
    
         {
             id: 1111401,
             name:"CCTV Workstations",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625055242/products2/cctv%20work%20stations/CCTV%20Workstations/high-end-cctv-workstation-maximum-128-cameras-hikcentral-only_ifxxvr.jpg",
             Url:"/CCTVWorkstations"
         },
    
         {
             id: 1111501,
             name:"CCTV Surge Protectors",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625055403/products2/cctv%20surge%20protectors/CCTV%20Surge%20Protectors/cctv-line-surge-protector-cvbs-and-hd-tvi_prtf2v.png",
             Url:"/CCTVSurgeProtectors"
         },
    
         {
             id: 1111601,
            name:"PTZ Controllers",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625055569/products2/ptz%20controllers/CCTV%20PTZ%20Controllers/analogue-ptz-keyboard-controller-rs485-rs422-12vdc_myek6q.jpg",
             Url:"/PTZControllers"
         },
    
         {
             id: 1111701,
            name:"CCTV Power Supplies And Power Stores",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625055674/products2/power%20supplies/CCTV%20Power%20Supplies%20and%20Power%20Stores/securi-prod-cctv-power-supply-switch-mode-12vdc-25amp-regulated_kkpsya.jpg",
             Url:"/CCTVPowerSuppliesAndPowerStores"
         },
    
         {
             id: 1111801,
             name:"CCTV NVRS",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625056589/products2/cctv%20nvrs/CCTV%20NVRs/64-channel-nvr-320mbps-with-no-poe-8-sata-bays-incl-4tb-hdd_ushnlu.jpg",
             Url:"/CCTVNVRS"
         },
    
         {
             id: 1111901,
            name:"CCTV DVRS",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625057357/products2/cctv%20dvrs/CCTV%20DVRs/16-channel-hd-tvi-ahd-cvbs-ip-tribrid-dvr_fq6oog.jpg",
             Url:"/CCTVDVRS"
         },
    
         {
             id: 11111001,
            name:"CCTV HD=TVI Cameras",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625060595/products2/cctv%20hd%20tvi/CCTV%20HD-TVI%20Cameras/cctv-hd-tvi-cameras_1_ypfjen.jpg",
             Url:"/CCTVHD=TVICameras"
         },
    
         {
             id: 2011,
            name:"CCTV Cabes & Connectors",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625064215/products2/cctv%20cables%20and%20connectors/CCTV%20Cables%20and%20Connectors/cat5e-s-utp-outdoor-uv-black-100m_jesmoq.jpg",
             Url:"/CCTVCabesConnectors"
         },
    
         {
             id: 2021,
            name:"CCTV IP Cameras",
             image:"https://res.cloudinary.com/photontrading/image/upload/v1625066868/products2/cctv%20ip%20cameras/CCTV%20IP%20Cameras/thermal-dual-lens-ptz-camera-50mm-ir-150m-ip66_ubagzq.jpg",
             Url:"/CCTVIPCameras"
         }
       
    ]

    return(
        <div className="row ">
                {data.map((data)=>
                <div className="categoriesdiv col-sm-4 col-md-6 col-lg-2 my-3 center">
                <a className="catlinks " href={data.Url}><div className=" CategoryCard  row"  key={data.id}>
              
            <div className="card bg-dark  text-white  "  id="categoryCard03">
              <img src={data.image} className=" flex d-flex flex-column flex-wrap"id="categoryimg03" alt="categories"/>
              <div className="card-img-overlay overlay">
                <h5 className="card-title CategoryCardTitle text-center">{data.name}</h5>
              
              </div>
            </div>
          </div>
          </a></div>)}
        
          </div>
        
            );
               
}

export default Alarms;
