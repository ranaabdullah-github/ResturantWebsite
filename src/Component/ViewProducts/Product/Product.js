import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

export const Product = ({product, onAddToCart}) => {
    return (
    <>
    {/* <div class=" col-md-4"> */}
    {/* <div class="col-md-3 col-lg-3 col-xl-3 offset-md-0 offset-sm-1"> */}
    <div class="col-lg-3 col-md-3 col-sm-10 ">
        <div class="card-product">
            <img src={product.image.url}/>
            <div class="descriptions">
                <div class="wsk-cp-text">
                    <div class="category">
                    {/* <Link to={'/detProduct/'+product.id}>Details</Link> */}
                    {/* <Link to={`/viewproducts/${product.id}/${product.name}/${product.image.url}/${product.price}`}><span>{product.categories[0].name}</span></Link> */}
                    {/* <Link to={`/viewProd/${product.id}/${product.name}/${product.image.url}`}><span>{product.categories[0].name}</span></Link> */}
                    {/* <Link to={`/viewProd/${product}`}><span>{product.categories[0].name}</span></Link> */}
                    <Link to={`/viewProd/${product.id}/${product.name}/${product.price.formatted}`}><button class="btnCategory" type="button">{product.categories[0].name}</button></Link>
                   
                    
                    </div>
                    {/* <Link to={`/details/${product.id}`}> */}
                    <div class="title-product">
                    <h3>{product.name}</h3>
                    </div>
                    
                    <div class="card-footer">
                    <div class="wcf-left"><span class="price">${product.price.formatted}</span></div>
                    <div class="wcf-right"> 
                    <i class="fa fa-shopping-cart" aria-hidden="true" onClick={() => onAddToCart(product.id,1)}></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
    )

}


export default Product
