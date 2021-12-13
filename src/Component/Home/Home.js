import React from 'react'
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import Hero from './Hero/Hero';
import Reserved from './Reserved/Reserved';
import About from '../About/About';
import FoodMenu from './FoodMenu/FoodMenu'
import Header from './Header/Header';
import Welcom from './Welcom/Welcom';
import SpecialTodaySlider from './SpecialTodaySlider/SpecialTodaySlider';


export const Home = () => {
    return (
        <div>
            {/* <NavbarResp/> */}
               {/* <ScrollIndicator/> */}
        <ScrollToTop/>
        <Header typePage={true}/>
        <Hero/>
        <main id="main">
              {/* <AnotherSlider/> */}
          {/* <Slider/> */}
          {/* <Events/> */}
         <testImage/>
         <Welcom/>
        <About/>
        <SpecialTodaySlider/>
         <FoodMenu/>
          <Reserved/>
          
     
        </main>
        </div>
    )
}
