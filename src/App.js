import React,{useState,useEffect} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import {commerce} from "./Lib/commerce"
import Tapbar from './Component/Tapbar/Tapbar.js';
import Cart from  './Component/Shopping/Cart/Cart'

import Footer from './Component/Footer/Footer';

import { Home } from './Component/Home/Home.js';
import ViewProducts from './Component/ViewProducts/ViewProducts';
import DetailsProduct from './Component/Details/DetailsProduct/DetailsProduct';
import Details from './Component/Details/Details';
import AllProducts from './Component/ViewProducts/AllProducts/AllProducts';
import NavbarResp from './Component/Home/NavbarResp';
import Header from './Component/Home/Header/Header';
import { ScrollToTop } from './Component/ScrollToTop/ScrollToTop';
import ScrollTopChangePage from './Component/ScrollToTopOnChangePage/ScrollTopChangePage';
import ModelTest from './Component/ModelTest';
// import MenuSpecial from './Component/MenuSpecial/MenuSpecial';


export const App = () => {
      const [products,setProducts] = useState([])
      const [categoriesData,setCategoriesData] = useState([])
      const [cart,setCart] = useState({line_items: []})


    const fetchProducts = async () =>{
      // const {data} = await commerce.products.list();
      const {data:products} = await commerce.products.list();
      const {data:categoriesData} = await commerce.categories.list();
      setProducts(products)
      setCategoriesData(categoriesData)
    console.log(categoriesData)
    console.log(products)
    }


    const fetchCart = async () =>{
      setCart(await commerce.cart.retrieve()) //  Create Empty Basket
    }

    const handleAddToCart = async (productid, quantity) =>{
      const {cart} = await commerce.cart.add(productid, quantity)
      setCart(cart)

    }



    const handleUpdateCart = async (productid, quantity) => {
      const {cart} = await commerce.cart.update(productid, {quantity});
    setCart(cart)
    }


    const handleRemoveCart = async (productid) => {
      const {cart} = await commerce.cart.remove(productid);
      setCart(cart);
    }

    const handleEmptyCart = async () => {
      const {cart} = await commerce.cart.empty();
      setCart(cart);
    }
    useEffect(() => {
      fetchProducts();
      console.log("UseEffect" +products)
      fetchCart();
      
    },[])
    
    return (
      <BrowserRouter>
      {/* <NavbarResp/> */}
   
      <Tapbar/>
      <Header/>
       <ScrollTopChangePage/>
       {/* <ModelTest/> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route exact path="/cart">
            <Cart cart={cart} handleUpdateCart={handleUpdateCart} handleRemoveCart={handleRemoveCart}  handleEmptyCart={handleEmptyCart} />
          </Route>
          <Route exact path="/viewproducts">
            <ViewProducts products={products} categoriesData={categoriesData} onAddToCart={handleAddToCart}  totalItems={cart.total_items} exact component={ViewProducts} />
          </Route>
          <Route path="/viewProd/:idProduct/:nameProduct/:priceProduct" exact component={Details}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );


}
export default App;
{/* <Route path="/viewProd/:idProduct/:nameProduct/:imageProduct/:priceProduct" exact component={Details}/> */}
        {/* <Route path="/viewProd/:objProduct" exact component={Details}/> */}