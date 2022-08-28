import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'


import Search from './Search'

import '../../App.css'

const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }

    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to="/">
                            <div id="logoimage4040" >
                                <img src='https://res.cloudinary.com/photontrading/image/upload/v1654806046/products/photonlogo_weodnq.png' alt='logo'/>
                            </div>
                        </Link> 

                        <div id="logoimage4041" >
                            <img src='https://res.cloudinary.com/photontrading/image/upload/v1655838579/photon_modified_tgn78x.png' alt='logo2'/>
                        </div>
                        
                          
                        <div class="dropdown" id='menutab0002' >
                               
                                 <img id="dropdownMenuButton" data-toggle="dropdown" src='https://res.cloudinary.com/photontrading/image/upload/v1655844602/134216_menu_lines_hamburger_icon004_bmdjyj.png'  alt='menubar'/>
                               
                                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <ul className="navbar-nav flex d-flex align-centre flex column">

                                <li classNames="nav-item">
                                       <a className="nav-link" id="nav01" href="/">Home</a>

                                     </li>

                        
                                     <li classNames="nav-item">
                                       <a className="nav-link" id="nav01" href="/networking">Networking</a>

                                     </li>

                                   <li className="nav-item">
                                     <a className="nav-link"id="nav02" href="/firealarms">Fire Alarms</a>

                                   </li>

                                 <li className="nav-item">
                                    <a className="nav-link" id="nav03" href="/electricfence">Electric Fencing</a>

                                 </li>
                        

                                <li className="nav-item">
                                   <a className="nav-link" id="nav04" href="/accesscontrol">Access Control</a>

                                </li>

                                 <li className="nav-item">
                                   <a className="nav-link" id="nav05" href="/alarmsandcctv">Alarms & CCTV</a>

                                </li>
                                <li className="nav-item">
                                   <a className="nav-link" id="nav06" href="/intercoms">Intercoms</a>

                                </li>

                                <li cclassName="nav-item">
                                    <a className="nav-link" id="nav07" href="/solar">Solar</a>

                                </li>

                                 <li className="nav-item">
                                    <a className="nav-link"id="nav08"  href="/aircons">AirCons</a>

                                 </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="nav09" href="/Lights">Lights</a>

                                </li>

                                 <li className="nav-item">
                                    <a className="nav-link" id="nav09" href="/pumps">Pumps & Motors</a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="nav09" href="/HomeAutomation">Home Automation</a>

                                </li>
                                <li className="nav-item">
                                   <a className="nav-link" id="nav09" href="lk#">Control Systems</a>

                                </li>
                       

                             </ul>
                                 </div>
                        </div>                        
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Route render={({ history }) => <Search history={history} />} />
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <Link to="/cart" style={{ textDecoration: 'none' }} >
                        <span id="cart" className="ml-3"><i class="fas iconn fs-2 fa-shopping-cart"></i></span>
                        <span className="ml-1" id="cart_count">{cartItems.length}</span>
                    </Link>


                    {user ? (
                        <div className="ml-4 dropdown d-inline">
                            *<Link to="#!" className="btn dropdown-toggle text-white Dropdownclass mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                {/*<figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                    />
                                </figure>*/}
                                <span className='userNameSmall'>{user && user.name}</span>
                            </Link>*
     
                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>

                            </div>

                           

                        </div>

                    ) :<Link to="/login" className="btn ml-4" id="login_btn">
                            <i id='userCircle' class="far iconn fs-1 fa-user-circle"></i>
                            <i class="smallScreen"> Login</i>
                        </Link>
                    }


                </div>
        
                <div className="navbar-expand-lg container align-centre row collapse navbar-collapse" id="navbar001">
                    <ul className="navbar-nav flex d-flex align-centre flex column">

                       
                        <li classNames="nav-item">
                            <a className="nav-link" id="nav01" href="/networking">Networking</a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link"id="nav02" href="/firealarms">Fire Alarms</a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="nav03" href="/electricfence">Electric Fencing</a>

                        </li>
                        

                        <li className="nav-item">
                            <a className="nav-link" id="nav04" href="/accesscontrol">Access Control</a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="nav05" href="/alarmsandcctv">Alarms & CCTV</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav06" href="/intercoms">Intercoms</a>

                        </li>

                        <li cclassName="nav-item">
                            <a className="nav-link" id="nav07" href="/solar">Solar</a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link"id="nav08"  href="/aircons">AirCons</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav09" href="/Lights">Lights</a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="nav09" href="/pumps">Pumps & Motors</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav09" href="/HomeAutomation">Home Automation</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav09" href="/ControlSystems">Control Systems</a>

                        </li>
                       


                        
                    </ul>

                </div>

                
        

            </nav>
        </Fragment>
    )
}

export default Header
