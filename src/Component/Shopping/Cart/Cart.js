
import React from 'react';
import DetailsHero from '../../Details/DetailsHero/DetailsHero';
import Header from '../../Home/Header/Header';
import HeaderToMainRoute from '../../Home/Header/HeaderToMainRoute';
import NavbarShopping from '../../ViewProducts/NavbarShopping/NavbarShopping';
import CartItems from '../CartItems/CartItems'
import './Cart.css'



const Cart = ({cart,handleUpdateCart,handleRemoveCart,handleEmptyCart}) => {
    // console.log(cart.line_items);
    // const totalPrice={cart.subtotal.formatted_with_symbol}
    const EmptyCart=()=>{
        return <h1 style={{marginTop:"50px"}}> no items in Shopping Cart</h1>
    }
    // if (!cart.line_items) return 'Loading';
    const FilledCart=()=>{
        return (
        <div style={{paddingLeft:"0px",paddingRight:"0px"}}>
            {/* <HeaderToMainRoute/> */}
            <Header typePage={false}/>
            <DetailsHero/>
             {/* <Header/>
            //  <DetailsHero/>
            <NavbarShopping/> */}
            {/* <section style={{backgroundColor:"#eee"}}> */}
                <div className="container-fluid py-5 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card">
                        <div className="card-body p-4">

                            <div className="row">

                            <div className="col-lg-7">
                                <h5 className="mb-3"><a href="#!" className="text-body"><i
                                    className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                                <hr/>

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <p className="mb-1">Shopping cart</p>
                                    <p className="mb-0">You have {cart.line_items.length } items in your cart</p>
                                </div>
                                {/* <div>
                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                                        className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                                </div> */}
                                </div>

                                {cart.line_items.map((item)=>(
                                     <div className="card mb-3" key={item.id}>
                                        <CartItems item={item} onUpdateCart={handleUpdateCart} onRemoveCart={handleRemoveCart}/>
                                     </div>
                                ))}
                            </div>
                            <div className="col-lg-5">

                                <div className="card text-white rounded-3" style={{backgroundColor:"#cda45e"}}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="mb-0">Card details</h5>
                                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.jpg"
                                        className="img-fluid rounded-3" style={{width: "45px"}} alt="Avatar"/> */}
                                    </div>

                                    <p className="small mb-2">Card type</p>
                                    <a href="#!" type="submit" className="text-white"><i
                                        className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                    <a href="#!" type="submit" className="text-white"><i
                                        className="fab fa-cc-visa fa-2x me-2"></i></a>
                                    <a href="#!" type="submit" className="text-white"><i
                                        className="fab fa-cc-amex fa-2x me-2"></i></a>
                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                                    <hr className="my-4"/>

                                    <div className="d-flex justify-content-between">
                                    <p className="mb-2">Subtotal</p>
                                    <p className="mb-2">{cart.subtotal.formatted_with_symbol}</p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                    <p className="mb-2">Shipping</p>
                                    <p className="mb-2">$20.00</p>
                                    </div>

                                    <div className="d-flex justify-content-between mb-4">
                                    <p className="mb-2">Total(Incl. tax es)</p>
                                    <p className="mb-2">{() =>(cart.subtotal.formatted_with_symbol+20) }</p>
                                    </div>

                                    <button type="button" className="btn btnCheck btn-block btn-lg">
                                    <div className="d-flex justify-content-between">
                                        <span>$1234</span>
                                        <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                    </div>
                                    </button>
                                    <button type="button" className="btn btn-block btn-lg btnCheck" onClick={()=> handleEmptyCart()}>
                                    <div className="d-flex justify-content-between">
                                        
                                        <span>Clear Cart <i className="fas fa-trash-alt"></i></span>
                                        
                                    </div>
                                    </button>

                                </div>
                                </div>

                            </div>

                            </div>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            {/* </section> */}
            </div>
        );
    }
    return (
        
        <div className="container-fluid">
          
            {!cart.line_items.length  ? <EmptyCart/> : <FilledCart/>}

            {/* {console.log(cart.line_items.length)} */}
            
        </div>
    )
}
export default Cart
