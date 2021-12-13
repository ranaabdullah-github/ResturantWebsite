// import React,{useState,useEffect} from 'react';
import Header from '../Home/Header/Header'
import Slider from '../Slider'
import AllProducts from './AllProducts/AllProducts'
// import {commerce} from "../../Lib/commerce"
import NavbarShopping from './NavbarShopping/NavbarShopping'
const ViewProductsError = (products,onAddToCart,totalItems) => {
    // const [products,setProducts] = useState([])
    //   const [cart,setCart] = useState({line_items: []})


    // const fetchProducts = async () =>{
    //   const {data} = await commerce.products.list();
    //   setProducts(data)
    // console.log(data)
    // }


    // const fetchCart = async () =>{
    //   setCart(await commerce.cart.retrieve()) //  Create Empty Basket
    // }

    // const handleAddToCart = async (productid, quantity) =>{
    //   const {cart} = await commerce.cart.add(productid, quantity)
    //   setCart(cart)

    // }



    // const handleUpdateCart = async (productid, quantity) => {
    //   const {cart} = await commerce.cart.update(productid, {quantity});
    // setCart(cart)
    // }


    // const handleRemoveCart = async (productid) => {
    //   const {cart} = await commerce.cart.remove(productid);
    //   setCart(cart);
    // }

    // const handleEmptyCart = async () => {
    //   const {cart} = await commerce.cart.empty();
    //   setCart(cart);
    // }
    // useEffect(() => {
    //   fetchProducts();
    //   fetchCart();
      
    // },[])
    return (
        <div>
            <Header/>
             <Slider/>
             {/* <NavbarShopping totalItems={totalItems}/> */}
               <NavbarShopping />
             <AllProducts products={products} onAddToCart={onAddToCart} />
        </div>
    )
}

export default ViewProductsError


// const ViewProducts = ({products,onAddToCart,totalItems}) => {
//     return (
//         <div>
//             <Header/>
//             <Slider/>
//             <AllProducts products={products} onAddToCart={onAddToCart} totalItems={totalItems}/>
//         </div>
//     )
// }

// export default ViewProducts
