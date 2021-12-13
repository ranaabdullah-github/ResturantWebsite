import React,{useState} from 'react'
import {useParams} from "react-router-dom";
import Header from '../Home/Header/Header'
import HeaderToMainRoute from '../Home/Header/HeaderToMainRoute';
import Hero from '../Home/Hero/Hero'
import NavbarShopping from '../ViewProducts/NavbarShopping/NavbarShopping';
import DetailsHero from './DetailsHero/DetailsHero'
import DetailsProduct from './DetailsProduct/DetailsProduct'


const Details = () => {
   // ------------Get id using params-----------
   const {idProduct}=useParams();
      
    return (
        <div>
          <Header typePage={false}/>
            {/* <HeaderToMainRoute/> */}
            <DetailsHero/>
            {/* <NavbarShopping/> */}
           
            <DetailsProduct idProduct={idProduct} />
            
        </div>
    )
}

export default Details
//   const mealObjView = MealObj(idProduct,nameProduct,imageProduct,priceProduct);

    // const MealObj =function (xidProduct,xnameProduct,ximageProduct,xpriceProduct){
    //     const idProd = xidProduct;
    //     let nameProd = xnameProduct;
    //     let imageProd = ximageProduct;
    //     let priceProd = xpriceProduct;
    //     return(idProd,nameProd,imageProd,priceProd)
    //   };
    //   const mealObjView = MealObj(idProduct,nameProduct,imageProduct,priceProduct);
    
    // const { yourData} = this.props.location.state