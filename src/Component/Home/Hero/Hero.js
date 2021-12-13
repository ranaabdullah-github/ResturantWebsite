import React, { Component } from "react";
import "./Style-Hero.css";
import Typical from 'react-typical';
class Hero extends Component{
    render(){
        return(
            <div>
                 {/* ======= Hero Section =======  */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-8">
                        <h1 className="bg-yellow-400 px-1">
                            <Typical
                                steps={[
                                'Welcome to YAMMY Restaurant',
                                5000,
                                'Enjoy Look Menu',
                                5000,
                                'Enjoy With The Delicious Dishes',
                                5000,
                                'Now Reserved Table',
                                5000,
                                ]}
                                wrapper="p"
                                loop={Infinity}
                            />
                        </h1>
                        {/* <h1>Welcome to <span>Restaurantly</span></h1> */}
                        <h2>Delivering great food for more than 18 years!</h2>

                        <div className="btns">
                            <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                            <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                        </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                        <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" className="glightbox play-btn"></a>
                        </div>

                    </div>
                    </div>
                </section>{/*<!-- End Hero -->*/}
            </div>
        )
    }
}
export default Hero;