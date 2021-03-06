import React from 'react'
import './Welcom.css'
export const Welcom = () => {
    return (
        <div>
            {/* <!-- ***** About Area Starts ***** --> */}
            {/* <!-- Welcome --> */}
                <section class="section-welcome bg1-pattern p-t-120 p-b-105" id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 p-t-45 p-b-30">
                                <div class="wrap-text-welcome t-center">
                                    <span class="tit2 t-center">
                                        Yammy Restaurant
                                    </span>

                                    <h3 class="tit3 t-center m-b-35 m-t-5">
                                        Welcome
                                    </h3>

                                    <p class="t-center m-b-22 size3 m-l-r-auto">
                                        Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
                                    </p>

                                    <a href="about.html" class="txt4">
                                        Our Story
                                        <i class="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="col-md-6 p-b-30">
                                <div class="wrap-pic-welcome size2 bo-rad-10 hov-img-zoom m-l-r-auto " data-aos="zoom-in" data-aos-delay="100">
                                    <img src="images/Welcom/our-story-01.jpg" alt="IMG-OUR"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        </div>
    )
}
export default Welcom;
