import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/Home'

import ProductDetails from './components/product/ProductDetails'

//header imports
//import airCons from './navlinks/AirCons'
//import electricFencing from './navlinks/ElectricFencing'

//import fireAlarms from './navlinks/FireAlarms'
//import intercoms from './navlinks/Intercoms'
//import networking from './navlinks/Networking'
//import pumps from './navlinks/Pumps'
//import solar from './navlinks/Solar'
//import accessControl from './navlinks/AccessControl'

// Cart Imports
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import Payment from './components/cart/Payment'
import OrderSuccess from './components/cart/OrderSuccess'

// Order Imports
import ListOrders from './components/order/ListOrders'
import OrderDetails from './components/order/OrderDetails'

// Auth or User imports
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'

// Admin Imports
import Dashboard from './components/admin/Dashboard'
import ProductsList from './components/admin/ProductsList'
import NewProduct from './components/admin/NewProduct'
import UpdateProduct from './components/admin/UpdateProduct'
import OrdersList from './components/admin/OrdersList'
import ProcessOrder from './components/admin/ProcessOrder'
import UsersList from './components/admin/UsersList'
import UpdateUser from './components/admin/UpdateUser'
import ProductReviews from './components/admin/ProductReviews'


import ProtectedRoute from './components/route/ProtectedRoute'
import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import axios from 'axios'

// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
//import alarms from './navlinks/Alarms&cctv'
import AirCons from './navlinks/AirCons'
import AccessControl from './navlinks/AccessControl'
import FireAlarms from './navlinks/FireAlarms'
import Intercoms from './navlinks/Intercoms'
import Networking from './navlinks/Networking'
import Pumps from './navlinks/Pumps'
import Solar from './navlinks/Solar'

import ElectricFencing from './navlinks/ElectricFencing'
import Alarms from './navlinks/Alarms&cctv'

//CATEGORIESSECTION IMPORT
//import Batteries from './components/Categorypages/solar/batteries'
//import Accessories from './components/Categorypages/solar/accessories'
//import Inveters from './components/Categorypages/solar/inverter'
//import DCPumps from './components/Categorypages/pumps/dcpumps'
//import ACPumps from './components/Categorypages/pumps/acpumps'
import BalunsHubs from './components/Categorypages/networking/balunsandhubs'
import CabinetsandCabling from './components/Categorypages/networking/cabinetsandcabling'
import HDMI from './components/Categorypages/networking/hdmi'
import MediaConvertersAndPoE from './components/Categorypages/networking/mediaconverters'
import NetworkSwitch from './components/Categorypages/networking/networkswitch'
import WirelessandWifi from './components/Categorypages/networking/wirelessandwifi'
import AnalogueVideoIntercoms from './components/Categorypages/Intercoms/analoguevideointercoms'
import AudioIntercoms from './components/Categorypages/Intercoms/audiointercoms'
import GSMIntercoms from './components/Categorypages/Intercoms/gsmintercoms'
import IPIntercomAccessories from './components/Categorypages/Intercoms/ipintercomaccessories'
import IPVideoIntercoms from './components/Categorypages/Intercoms/ipvideointercoms'
import CallPoints from './components/Categorypages/firealarms/callpoints'
import FireAlarmAccesories from './components/Categorypages/firealarms/firealarmaccesories'
import FireControlPanels from './components/Categorypages/firealarms/firecontrolpanels'
import FireDetectors from './components/Categorypages/firealarms/firedetectors'
import Energizers from './components/Categorypages/electricfence/energizers'
import FencingAccesories from './components/Categorypages/electricfence/fencingaccessories'
import FencingBrackets from './components/Categorypages/electricfence/fencingbrackets'
import Fencingwirecables from './components/Categorypages/electricfence/fencingwireandcables'
import AlarmAccesories from './components/Categorypages/alarms&cctv/alarmaccesories'
import Alarmcontrolpanels from './components/Categorypages/alarms&cctv/alarmcontrolpanel'
import AlarmExpanders from './components/Categorypages/alarms&cctv/alarmexpanders'
import AlarmSystemDetectors from './components/Categorypages/alarms&cctv/alarmsystemdetectors'
import CCTVCabesConnectors from './components/Categorypages/alarms&cctv/cctvcabesconnectors'
import AlarmKeypads from './components/Categorypages/alarms&cctv/alarmskeypads'
import CCTVCameraBrackets from './components/Categorypages/alarms&cctv/cctvcamerabrackets'
import CCTVDVRS from './components/Categorypages/alarms&cctv/cctvdvrs'
import CCTVHardDrives from './components/Categorypages/alarms&cctv/cctvharddrives'
import CCTVHDTVICameras from './components/Categorypages/alarms&cctv/cctvhdtvicameras'
import CCTVIPCameras from './components/Categorypages/alarms&cctv/cctvipcameras'
import CCTVMonitors from './components/Categorypages/alarms&cctv/cctvmonitors'
import CCTVNVRS from './components/Categorypages/alarms&cctv/cctvnvrs'
import CCTVSurgeProtectors from './components/Categorypages/alarms&cctv/cctvsurgeprotectors'
import CCTVWorkstations from './components/Categorypages/alarms&cctv/cctvworkstations'
import CCTVPowerSuppliesAndPowerStores from './components/Categorypages/alarms&cctv/cctvpowersuppliesandpowerstores'
import PTZControllers from './components/Categorypages/alarms&cctv/ptzcontrollers'
//import CassetteNonInverter from './components/Categorypages/aircons/cassettenoninv'
//import MidwallSplitInverter from './components/Categorypages/aircons/mildwall'
//import MildwallSplitNonInverter from './components/Categorypages/aircons/mildwallinverter'
import DoorClosers from './components/Categorypages/accescontrol01.js/doorclosers'
import ElectricLocks from './components/Categorypages/accescontrol01.js/electriclocks'
import ElectricDoorStrikes from './components/Categorypages/accescontrol01.js/electricdoorstrikes'
import EnrollmentScanners from './components/Categorypages/accescontrol01.js/enrollmentscanners'
import EntranceControl from './components/Categorypages/accescontrol01.js/entrancecontrol'
import ExitButtons from './components/Categorypages/accescontrol01.js/exitbuttons'
import Garagedoors from './components/Categorypages/accescontrol01.js/garagedoors'
import Inspection from './components/Categorypages/accescontrol01.js/inspection'
import KeypadReaders from './components/Categorypages/accescontrol01.js/keypadreader'
import Readers from './components/Categorypages/accescontrol01.js/readers'
import SlidingGateMotors from './components/Categorypages/accescontrol01.js/slidinggatemotors'
import TakeOnReaders from './components/Categorypages/accescontrol01.js/takeonreaders'
import TrafficBarriers from './components/Categorypages/accescontrol01.js/trafficBarriers'
//import AirCurtain from './components/Categorypages/aircons/aircurtains'
import footerWords from './components/layout/footerWords'
import footerwoords001 from './components/layout/footerwoords001'
import comeSoon from './components/layout/comingSoon'






//import Decorativelights from './components/Categorypages/Lights/Decorativelights'
//import FloodLights from './components/Categorypages/Lights/FloodLights'
//import LedLights from './components/Categorypages/Lights/LedLights'
//import Motiondetectorss from './components/Categorypages/Lights/Motiondetectorss'
//import PortableLights from './components/Categorypages/Lights/PortableLights'
//import SolarStreetLights from './components/Categorypages/Lights/SolarStreetLights'
//import HomeAutomationControllers from './components/Categorypages/home Automation/HomeAutomationControllers'
//import HomeAutomationNetwork from './components/Categorypages/home Automation/HomeAutomationNetwork'
//import HomeAutomationSwitches from './components/Categorypages/home Automation/HomeAutomationSwitches'
//import HomeAutomationSensors from './components/Categorypages/home Automation/HomeAutomationSensors'
import Lights from './navlinks/Lights'
import HomeAutomation from './navlinks/homeAutomation'
import Searchme from './components/searchme'


function App() {

  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');

      setStripeApiKey(data.stripeApiKey)
    }

    getStripApiKey();

  }, [])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          
          <Route path="/" component={Home} exact />
         
          <Route path="/DCPumps" component={comeSoon} exact />
<Route path="/ACPumps" component={comeSoon} exact />
<Route path="/BalunsHubs" component={BalunsHubs} exact />
<Route path="/HDMI" component={HDMI} exact />
<Route path="/MediaConvertersAndPoE" component={MediaConvertersAndPoE} exact />
<Route path="/NetworkSwitch" component={NetworkSwitch} exact />
<Route path="/WirelessandWifi" component={WirelessandWifi} exact />
<Route path="/CabinetsandCabling" component={CabinetsandCabling} exact />
<Route path="/AnalogueVideoIntercoms" component={AnalogueVideoIntercoms} exact />
<Route path="/AudioIntercoms" component={AudioIntercoms} exact />
<Route path="/GSMIntercoms" component={GSMIntercoms} exact />
<Route path="/IPIntercomAccessories" component={IPIntercomAccessories} exact />
<Route path="/IPVideoIntercoms" component={IPVideoIntercoms} exact />
<Route path="/CallPoints" component={CallPoints} exact />
<Route path="/FireAlarmAccesories" component={FireAlarmAccesories} exact />
<Route path="/FireControlPanels" component={FireControlPanels} exact />
<Route path="/FireDetectors" component={FireDetectors} exact />
<Route path="/Energizers" component={Energizers} exact />
<Route path="/Fencing Accesories" component={FencingAccesories} exact />
<Route path="/FencingBrackets" component={FencingBrackets} exact />
<Route path="/fencingwirecables" component={Fencingwirecables} exact />
<Route path="/MildwallSplitNonInverter" component={comeSoon} exact />
<Route path="/MidwallSplitInverter" component={comeSoon} exact />
<Route path="/Cassette-Non Inverter" component={comeSoon} exact />
<Route path="/AirCurtain" component={comeSoon} exact />
<Route path="/Garagedoors" component={Garagedoors} exact />
<Route path="/SlidingGateMotors" component={SlidingGateMotors} exact />
<Route path="/TrafficBarriers" component={TrafficBarriers} exact />
<Route path="/DoorClosers" component={DoorClosers} exact />
<Route path="/ElectricDoorStrikes" component={ElectricDoorStrikes} exact />
<Route path="/ElectricLocks" component={ElectricLocks} exact />
<Route path="/TakeOnReaders" component={TakeOnReaders} exact />
<Route path="/Readers" component={Readers} exact />
<Route path="/KeypadReaders" component={KeypadReaders} exact />
<Route path="/Inspection" component={Inspection} exact />
<Route path="/ExitButtons" component={ExitButtons} exact />
<Route path="/EntranceControl" component={EntranceControl} exact />
<Route path="/Enrollment Scanners" component={EnrollmentScanners} exact />
<Route path="/legalinfo" component={footerWords} exact />
<Route path="/about" component={footerwoords001} exact />
<Route path="/Inveters" component={comeSoon} exact />
<Route path="/Batteries" component={comeSoon} exact />
<Route path="/Accessories" component={comeSoon} exact />
<Route path="/Alarmcontrolpanels" component={Alarmcontrolpanels} exact />
<Route path="/AlarmExpanders" component={AlarmExpanders} exact />
<Route path="/AlarmKeypads" component={AlarmKeypads} exact />
<Route path="/AlarmSystemDetectors" component={AlarmSystemDetectors} exact />
<Route path="/AlarmAccesories" component={AlarmAccesories} exact />   
<Route path="/CCTVCameraBrackets" component={CCTVCameraBrackets} exact />
<Route path="/CCTVHardDrives" component={CCTVHardDrives} exact />
<Route path="/CCTVMonitors" component={CCTVMonitors} exact />
<Route path="/CCTVWorkstations" component={CCTVWorkstations} exact />
<Route path="/CCTVSurgeProtectors" component={CCTVSurgeProtectors} exact />
<Route path="/PTZControllers" component={PTZControllers} exact />
<Route path="/CCTVPowerSuppliesAndPowerStores" component={CCTVPowerSuppliesAndPowerStores} exact />
<Route path="/CCTVNVRS" component={CCTVNVRS} exact />
<Route path="/CCTVDVRS" component={CCTVDVRS} exact />
<Route path="/CCTVHD=TVICameras" component={CCTVHDTVICameras} exact />
<Route path="/CCTVCabesConnectors" component={CCTVCabesConnectors} exact />
<Route path="/CCTVIPCameras" component={CCTVIPCameras} exact />
<Route path="/searchme" component={Searchme} exact />
<Route path="/productsComingSoon" component={comeSoon} exact />



<Route path="/HomeAutomation" component={HomeAutomation} exact />
<Route path="/Lights" component={Lights} exact />
<Route path="/HomeAutomationSensors" component={comeSoon} exact />
<Route path="/HomeAutomationSwitches" component={comeSoon} exact />
<Route path="/HomeAutomationNetwork" component={comeSoon} exact />
<Route path="/SolarStreetLights" component={comeSoon} exact />
<Route path="/HomeAutomationControllers" component={comeSoon} exact />
<Route path="/PortableLights" component={comeSoon} exact />
<Route path="/Motiondetectorss" component={comeSoon} exact />
<Route path="/LedLights" component={comeSoon} exact />
<Route path="/FloodLights" component={comeSoon} exact />
<Route path="/Decorativelights" component={comeSoon} exact />
<Route path="/ControlSystems" component={comeSoon} exact />


          
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path="/aircons" component={AirCons} exact />
          <Route path="/accesscontrol" component={AccessControl} exact />
         
          <Route path="/firealarms" component={FireAlarms} exact />
          <Route path="/intercoms" component={Intercoms} exact />
          <Route path="/networking" component={Networking} exact />
          <Route path="/pumps" component={Pumps} exact />
          <Route path="/solar" component={Solar} exact />
       
          <Route path="/Best-Products" component={Home} exact />
          <Route path="/electricfence" component={ElectricFencing} exact />
          <Route path="/alarmsandcctv" component={Alarms} exact />
          

          <Route path="/cart" component={Cart} exact />
          <ProtectedRoute path="/shipping" component={Shipping} />
          <ProtectedRoute path="/confirm" component={ConfirmOrder} exact />
          <ProtectedRoute path="/success" component={OrderSuccess} />
          {stripeApiKey &&
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoute path="/payment" component={Payment} />
            </Elements>
          }

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />
          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute path="/password/update" component={UpdatePassword} exact />

          <ProtectedRoute path="/orders/me" component={ListOrders} exact />
          <ProtectedRoute path="/order/:id" component={OrderDetails} exact />
        </div>

        <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
        <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact />
        <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact />
        <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact />
        <ProtectedRoute path="/admin/orders" isAdmin={true} component={OrdersList} exact />
        <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />
        <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} exact />
        <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact />
        <ProtectedRoute path="/admin/reviews" isAdmin={true} component={ProductReviews} exact />

        { (!loading || !isAuthenticated || user.role !== 'admin') ? <Footer/> : "" }
      </div>
    </Router>
  );
}

export default App;
