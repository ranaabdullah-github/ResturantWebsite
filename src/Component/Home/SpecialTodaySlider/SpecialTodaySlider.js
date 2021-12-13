import React from 'react'
import Slider from "react-slick";
import './SpecialTodaySlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const SpecialTodaySlider = () => {
    var settings = {
        dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 3000,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    return (
        <div class="special-menu pad-top-100 parallax">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="wow fadeIn section-title" data-wow-duration="1s" data-wow-delay="0.1s">
                            <p className="block-title  text-center"> Today's Special </p>
                            <h5 className="title-caption text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia,nostrud exercitation ullamco. </h5>
                        </div>
                        <div class="special-box">
                            <div id="owl-demo" >
                                <Slider {...settings} >
                                    <div>
                                        <div className="item item-type-zoom">
                                            <a href="#" className="item-hover">
                                                <div className="item-info">
                                                    <div className="headline">
                                                        SALMON STEAK
                                                        <div className="line"></div>
                                                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="item-img">
                                                <img src="images/SpecialToday/special-menu-1.jpg" alt="sp-menu"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item item-type-zoom">
                                            <a href="#" className="item-hover">
                                                <div className="item-info">
                                                    <div className="headline">
                                                        SALMON STEAK
                                                        <div className="line"></div>
                                                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="item-img">
                                                <img src="images/SpecialToday/special-menu-2.jpg" alt="sp-menu"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item item-type-zoom">
                                            <a href="#" className="item-hover">
                                                <div className="item-info">
                                                    <div className="headline">
                                                        SALMON STEAK
                                                        <div className="line"></div>
                                                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="item-img">
                                                <img src="images/SpecialToday/special-menu-3.jpg" alt="sp-menu"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item item-type-zoom">
                                            <a href="#" className="item-hover">
                                                <div className="item-info">
                                                    <div className="headline">
                                                        SALMON STEAK
                                                        <div className="line"></div>
                                                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="item-img">
                                                <img src="images/SpecialToday/special-menu-4.jpg" alt="sp-menu"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item item-type-zoom">
                                            <a href="#" className="item-hover">
                                                <div className="item-info">
                                                    <div className="headline">
                                                        SALMON STEAK
                                                        <div className="line"></div>
                                                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="item-img">
                                                <img src="images/SpecialToday/special-menu-5.jpg" alt="sp-menu"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item item-type-zoom">
                                            <a href="#" className="item-hover">
                                                <div className="item-info">
                                                    <div className="headline">
                                                        SALMON STEAK
                                                        <div className="line"></div>
                                                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="item-img">
                                                <img src="images/SpecialToday/special-menu-6.jpg" alt="sp-menu"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item item-type-zoom">
                                            <a href="#" className="item-hover">
                                                <div className="item-info">
                                                    <div className="headline">
                                                        SALMON STEAK
                                                        <div className="line"></div>
                                                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="item-img">
                                                <img src="images/SpecialToday/special-menu-7.jpg" alt="sp-menu"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item item-type-zoom">
                                            <a href="#" className="item-hover">
                                                <div className="item-info">
                                                    <div className="headline">
                                                        SALMON STEAK
                                                        <div className="line"></div>
                                                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="item-img">
                                                <img src="images/SpecialToday/special-menu-8.jpg" alt="sp-menu"/>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialTodaySlider
