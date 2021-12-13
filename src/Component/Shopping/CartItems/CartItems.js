
import React, { useState } from 'react'
import './CartItems.css'
const CartItems = ({item,onUpdateCart,onRemoveCart}) => {
        return (
            <div key={item.id}>
               {/* <h1>itemCart</h1> */}
               <div className="card-body">
               <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div>
                                <img
                                src={item.image.url}
                                className="img-fluid rounded-3" alt="Shopping item" style={{width:"65px"}}/>
                            </div>
                            <div className="ms-3">
                                <h5>{item.name}</h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            {/* <div style={{width:"50px"}}>
                                <h5 className="fw-normal mb-0">2</h5>
                            </div> */}
                            <div className="mr-3 text-center" style={{width: "50px"}}>
                                <button class="butCart" onClick={()=> onUpdateCart(item.id,item.quantity+1)}>+</button>
                                <p>{item.quantity}</p>
                                <button class="butCart" onClick={()=> onUpdateCart(item.id,item.quantity-1)}>-</button>
                            </div>
                            <div style={{width: "100px"}}>
                                {/* <h4 className="mb-0">{item.price}</h4> */}
                                <h5 className="mb-0" style={{display:"inline",paddingRight:"5px"}}>{item.line_total.formatted_with_symbol}</h5>
                                <span><a href="#!" style={{color: "#fa4639"}} onClick={()=> onRemoveCart(item.id)}><i className="fas fa-trash-alt"></i></a></span>
                            </div>
                            
                            
                           
                        </div>
                        
                    </div>
                </div>
        </div>
           
        )
}
export default CartItems;
