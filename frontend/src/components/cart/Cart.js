import React, { Fragment } from 'react'

import MetaData from '../layout/MetaData'


import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'

const Cart = ({ history }) => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id))
    }

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1;

        if (newQty > stock) return;

        dispatch(addItemToCart(id, newQty))
    }

    const decreaseQty = (id, quantity) => {

        const newQty = quantity - 1;

        if (newQty <= 0) return;

        dispatch(addItemToCart(id, newQty))

    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Fragment>
            <MetaData title={'Your Cart'} />
            {cartItems.length === 0 ? <h2 className="mt-5">Your Cart is Empty</h2> : (
                <Fragment>
                    <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>

                    <div className="row  inine d-flex justify-content-between">
                        <div className="col-12 col-lg-8">

                            {cartItems.map(item => (
                                <Fragment>
                                    <hr />

                                    <div className="cart-item" key={item.product}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.image} alt="Laptop" height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                {item.name}
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">${item.price}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-danger minus" onClick={() => decreaseQty(item.product, item.quantity)}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={item.quantity} readOnly />

                                                    <span className="btn btn-primary plus" onClick={() => increaseQty(item.product, item.quantity, item.stock)}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="far  fa-times-circle btn btn-danger" onClick={() => removeCartItemHandler(item.product)} ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                  
                                </Fragment>
                            ))}
                            </div>
                            <div className="col-12 col-lg-3 my-4">

                            <div className="card extraCard" >
        <div className="card-body">
            <div className="extraCardIcon text-center fs-1">
              <i className="fas fa-car"></i>

            </div>
          
          <h6 className="card-subtitle extraSubtitle text-center mb-2 text-muted ">Standard deliveries</h6>
          <p className="card-text text-center">Our Trusted couriers are DHL,Executive Courier and Swift.<br/>Country-Wide deliveries within 3-5 Working 
            day.
          </p>
         
        </div>
      </div>
                            <div className="card extraCard" >


        <div className="card-body">
            <div className="extraCardIcon text-center fs-1">
              <i className="far fa-handshake"></i>

            </div>
          
          <h6 className="card-subtitle extraSubtitle text-center mb-2 text-muted">Secure Payments</h6>
          <div className="card-text text-center">
            We do accept all kinds of payments.
            Visas,Bank deposits,Mukuru,Western Union,World Remit.
            
            
          </div>
         
        </div>
      </div>
                        </div>





                    </div >

                    <div className="row">
                    
                            
                            <div className="card  checkOutCard col-12 card col-lg-4 my-4 ">
  <div className="card-header text-center flex d-flex flex-column">
   <h5>Your Cart Summary</h5> 
  </div>
  <div className="card-body">
  <p>Number of Items:  <span className="order-summary-values">{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} (Units)</span></p>
  <p>Delivery Fee <span className="order-summary-values">$0.00</span></p>

                                <p>Amount Due: <span className="order-summary-values">${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</span></p>

                                <hr />
   
      <button id="checkout_btn" className="btn btn-primary checkOutText btn-block" onClick={checkoutHandler}>Check out</button>
  </div>
</div> 

                        
                     

                        <div className="col-12 col-lg-4 my-4">
                        <div className="card checkOutCard">
  <div className="card-header  text-center flex d-flex flex-column">
   <h5>For Customised Orders</h5> 
  </div>
  <div className="card-body">
    
    <p className="card-text">For Customised Orders,Vouchers and Discounts.Enter the Order Number Here.</p>
    <div className="form-group">
     
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Order Number"/>
      <small id="emailHelp" className="form-text text-muted">Never Share your order number with sommeone else.</small>
    </div>
    <a href="PP" className="btn CartBtn flex d-flex flex-column">  <h6 className="checkOutText  text-center">Proceed to Checkout</h6></a>
  </div>
</div> 
                        </div>

                        <div className="col-12 col-lg-3  extraCheck my-4 align-left">
                        <div className="card extraCard" >
    <div className="card-body check">
        <div className="extraCardIcon text-center fs-1">
          <i className="far fa-question-circle"></i>

        </div>
      
      <h6 className="card-subtitle extraSubtitle text-center mb-2 text-muted">Got questions? </h6>
      <p className="card-text text-center">Please Get in touch
        089671.<br/>
        Want to Pay us differently?
        Talk to us
      </p>
     
    </div>
  </div>
                        </div>

                    </div>
                       
                            

                    
                       
                   
                      
                    
                </Fragment>
            )}
        </Fragment>
    )
}

export default Cart



//<Card style={{ width: '18rem' }}>
//<Card.Body>
//<div className="extraCardIcon text-center fs-1">
         // <i classNaME="far fa-question-circle"></i>

//</div>
      
//<Card.Subtitle className="mb-2 text-muted text-center">Card Subtitle</Card.Subtitle>
//<Card.Text className="text-center">
  //Some quick example text to build on the card title and make up the bulk of
  //the card's content.
//</Card.Text>

//</Card.Body>
//</Card>