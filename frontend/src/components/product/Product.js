import React from 'react'
import { Link } from 'react-router-dom'



const Product = ({ product, col }) => {
    return (
    
        <div className={`col-sm-10 col-md-6 col-lg-${col} my-3`}>
            
            <div className="Panel" id="procard001"> 
                <div className="pro-img-box">
                <Link id="productlink" to={`/product/${product._id}`}>
                <img   id="productImage0001" className='img-fluid'
                    //className="card-img-top mx-auto"
                    src={product.images[0].url}
                   
                   alt='Productssimage'
                />
                </Link>
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                    <Link id="productlink" to={`/product/${product._id}`}> {product.name.slice(0,35)}....</Link>

                    
                    </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                        </div>
                        
                    </div>
                    <p className="card-text" id="prodPrice001">${product.price}</p>
                    <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
                </div>
            </div>
            
        </div>
        
    )
}

export default Product












 