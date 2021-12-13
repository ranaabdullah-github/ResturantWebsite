
import React, { Component } from 'react'
import { Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css'
// import './util.css'

export class Events extends Component {
    render() {
        return (
            <div className="slide">
            <Carousel fade interval={6000}>
            <Carousel.Item>
              
              <img
                className="d-block w-100"
                src="images/Events/bg-event-01.jpg"
                alt="First slide"
                height="560px"
              />
              <Carousel.Caption>
              <div class="wrap-content-slide2 p-t-115 p-b-208">
                        <div class="container">
                            {/* <!-- - --> */}
                            <div class="title-event t-center m-b-52">
                                <span class="tit2 p-l-15 p-r-15">
                                    Upcomming
                                </span>

                                <h3 class="tit6 t-center p-l-15 p-r-15 p-t-3">
                                    Events
                                </h3>
                            </div>

                            {/* <!-- Block2 --> */}
                            <div class="blo2 flex-w flex-str flex-col-c-m-lg animated " data-aos="zoop-in-right" data-aos-delay="100">
                                {/* <!-- Pic block2 --> */}
                                <a href="#" class="wrap-pic-blo2 bg1-blo2" style={{backgroundImage: "url(./images/Events/event-02.jpg);"}}>
                                    <div class="time-event size10 txt6 effect1">
                                        <span class="txt-effect1 flex-c-m t-center">
                                            08:00 PM Tuesday - 21 November 2018
                                        </span>
                                    </div>
                                </a>

                                {/* <!-- Text block2 --> */}
                                <div class="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
                                    <h4 class="tit7 t-center m-b-10">
                                        Wines during specific nights
                                    </h4>

                                    <p class="t-center">
                                        Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
                                    </p>

                                    <div class="flex-sa-m flex-w w-full m-t-40">
                                        <div class="size11 flex-col-c-m">
                                            <span class="dis-block t-center txt7 m-b-2 days">
                                                25
                                            </span>

                                            <span class="dis-block t-center txt8">
                                                Days
                                            </span>
                                        </div>

                                        <div class="size11 flex-col-c-m">
                                            <span class="dis-block t-center txt7 m-b-2 hours">
                                                12
                                            </span>

                                            <span class="dis-block t-center txt8">
                                                Hours
                                            </span>
                                        </div>

                                        <div class="size11 flex-col-c-m">
                                            <span class="dis-block t-center txt7 m-b-2 minutes">
                                                59
                                            </span>

                                            <span class="dis-block t-center txt8">
                                                Minutes
                                            </span>
                                        </div>

                                        <div class="size11 flex-col-c-m">
                                            <span class="dis-block t-center txt7 m-b-2 seconds">
                                                56
                                            </span>

                                            <span class="dis-block t-center txt8">
                                                Seconds
                                            </span>
                                        </div>
                                    </div>

                                    <a href="#" class="txt4 m-t-40">
                                        View Details
                                        <i class="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/Events/bg-event-02.jpg"
                alt="Second slide"
                height="560px"
              />
            
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/Events/bg-event-03.jpg"
                alt="Third slide"
                height="560px"
              />
          
              <Carousel.Caption>
              <h3>New Collection Basketball shoes</h3>
              <p>Play WITH HI ENERGY​</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            </div>
        )
    }
}

export default Events



// import React from 'react'
// import { Carousel} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Events.css'


// const Events = () => {
//     return (
     
//         <section class="section-event">
//                <h1>hiiiiiiiiiiiiiii</h1>
//                 <div class="wrap-slick2 slide">
//         <div className="slide">
//             <Carousel fade interval={6000}>
               
//             {/* <!-- Event --> */}
            
//                     <div class="slick2">
//                     <Carousel.Item>
//                         <div class="item-slick2 item1-slick2" style={{backgroundImage:"url(Events/bg-event-01.jpg);"}}>
                            // <div class="wrap-content-slide2 p-t-115 p-b-208">
                            //     <div class="container">
                            //         {/* <!-- - --> */}
                            //         <div class="title-event t-center m-b-52">
                            //             <span class="tit2 p-l-15 p-r-15">
                            //                 Upcomming
                            //             </span>

                            //             <h3 class="tit6 t-center p-l-15 p-r-15 p-t-3">
                            //                 Events
                            //             </h3>
                            //         </div>

                            //         {/* <!-- Block2 --> */}
                            //         <div class="blo2 flex-w flex-str flex-col-c-m-lg animated visible-false" data-appear="zoomIn">
                            //             {/* <!-- Pic block2 --> */}
                            //             <a href="#" class="wrap-pic-blo2 bg1-blo2" style={{backgroundImage: "url(images/Events/event-02.jpg);"}}>
                            //                 <div class="time-event size10 txt6 effect1">
                            //                     <span class="txt-effect1 flex-c-m t-center">
                            //                         08:00 PM Tuesday - 21 November 2018
                            //                     </span>
                            //                 </div>
                            //             </a>

                            //             {/* <!-- Text block2 --> */}
                            //             <div class="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
                            //                 <h4 class="tit7 t-center m-b-10">
                            //                     Wines during specific nights
                            //                 </h4>

                            //                 <p class="t-center">
                            //                     Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
                            //                 </p>

                            //                 <div class="flex-sa-m flex-w w-full m-t-40">
                            //                     <div class="size11 flex-col-c-m">
                            //                         <span class="dis-block t-center txt7 m-b-2 days">
                            //                             25
                            //                         </span>

                            //                         <span class="dis-block t-center txt8">
                            //                             Days
                            //                         </span>
                            //                     </div>

                            //                     <div class="size11 flex-col-c-m">
                            //                         <span class="dis-block t-center txt7 m-b-2 hours">
                            //                             12
                            //                         </span>

                            //                         <span class="dis-block t-center txt8">
                            //                             Hours
                            //                         </span>
                            //                     </div>

                            //                     <div class="size11 flex-col-c-m">
                            //                         <span class="dis-block t-center txt7 m-b-2 minutes">
                            //                             59
                            //                         </span>

                            //                         <span class="dis-block t-center txt8">
                            //                             Minutes
                            //                         </span>
                            //                     </div>

                            //                     <div class="size11 flex-col-c-m">
                            //                         <span class="dis-block t-center txt7 m-b-2 seconds">
                            //                             56
                            //                         </span>

                            //                         <span class="dis-block t-center txt8">
                            //                             Seconds
                            //                         </span>
                            //                     </div>
                            //                 </div>

                            //                 <a href="#" class="txt4 m-t-40">
                            //                     View Details
                            //                     <i class="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
                            //                 </a>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
//                         </div>
//                      </Carousel.Item>
//                      <Carousel.Item>
//                         <div class="item-slick2 item2-slick2" style={{backgroundImage: "url(images/Events/bg-event-02.jpg);"}}>
//                             <div class="wrap-content-slide2 p-t-115 p-b-208">
//                                 <div class="container">
//                                     {/* <!-- - --> */}
//                                     <div class="title-event t-center m-b-52">
//                                         <span class="tit2 p-l-15 p-r-15">
//                                             Upcomming
//                                         </span>

//                                         <h3 class="tit6 t-center p-l-15 p-r-15 p-t-3">
//                                             Events
//                                         </h3>
//                                     </div>

//                                     {/* <!-- Block2 --> */}
//                                     <div class="blo2 flex-w flex-str flex-col-c-m-lg animated visible-false" data-appear="fadeInDown">
//                                         {/* <!-- Pic block2 --> */}
//                                         <a href="#" class="wrap-pic-blo2 bg2-blo2" style={{backgroundImage: "url(images/Events/event-06.jpg);"}}>
//                                             <div class="time-event size10 txt6 effect1">
//                                                 <span class="txt-effect1 flex-c-m">
//                                                     08:00 PM Tuesday - 21 November 2018
//                                                 </span>
//                                             </div>
//                                         </a>

//                                         {/* <!-- Text block2 --> */}
//                                         <div class="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
//                                             <h4 class="tit7 t-center m-b-10">
//                                                 Wines during specific nights
//                                             </h4>

//                                             <p class="t-center">
//                                                 Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
//                                             </p>

//                                             <div class="flex-sa-m flex-w w-full m-t-40">
//                                                 <div class="size11 flex-col-c-m">
//                                                     <span class="dis-block t-center txt7 m-b-2 days">
//                                                         25
//                                                     </span>

//                                                     <span class="dis-block t-center txt8">
//                                                         Days
//                                                     </span>
//                                                 </div>

//                                                 <div class="size11 flex-col-c-m">
//                                                     <span class="dis-block t-center txt7 m-b-2 hours">
//                                                         12
//                                                     </span>

//                                                     <span class="dis-block t-center txt8">
//                                                         Hours
//                                                     </span>
//                                                 </div>

//                                                 <div class="size11 flex-col-c-m">
//                                                     <span class="dis-block t-center txt7 m-b-2 minutes">
//                                                         59
//                                                     </span>

//                                                     <span class="dis-block t-center txt8">
//                                                         Minutes
//                                                     </span>
//                                                 </div>

//                                                 <div class="size11 flex-col-c-m">
//                                                     <span class="dis-block t-center txt7 m-b-2 seconds">
//                                                         56
//                                                     </span>

//                                                     <span class="dis-block t-center txt8">
//                                                         Seconds
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             <a href="#" class="txt4 m-t-40">
//                                                 View Details
//                                                 <i class="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         </Carousel.Item>
//                         <Carousel.Item>
//                         <div class="item-slick2 item3-slick2" style={{backgroundImage: "url(images/Events/bg-event-04.jpg);"}}>
//                             <div class="wrap-content-slide2 p-t-115 p-b-208">
//                                 <div class="container">
//                                     {/* <!-- - --> */}
//                                     <div class="title-event t-center m-b-52">
//                                         <span class="tit2 p-l-15 p-r-15">
//                                             Upcomming
//                                         </span>

//                                         <h3 class="tit6 t-center p-l-15 p-r-15 p-t-3">
//                                             Events
//                                         </h3>
//                                     </div>

//                                     {/* <!-- Block2 --> */}
//                                     <div class="blo2 flex-w flex-str flex-col-c-m-lg animated visible-false" data-appear="rotateInUpLeft">
//                                         {/* <!-- Pic block2 --> */}
//                                         <a href="#" class="wrap-pic-blo2 bg3-blo2" style={{backgroundImage: "url(images/Events/event-01.jpg);"}}>
//                                             <div class="time-event size10 txt6 effect1">
//                                                 <span class="txt-effect1 flex-c-m">
//                                                     08:00 PM Tuesday - 21 November 2018
//                                                 </span>
//                                             </div>
//                                         </a>

//                                         {/* <!-- Text block2 --> */}
//                                         <div class="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
//                                             <h4 class="tit7 t-center m-b-10">
//                                                 Wines during specific nights
//                                             </h4>

//                                             <p class="t-center">
//                                                 Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia
//                                             </p>

//                                             <div class="flex-sa-m flex-w w-full m-t-40">
//                                                 <div class="size11 flex-col-c-m">
//                                                     <span class="dis-block t-center txt7 m-b-2 days">
//                                                         25
//                                                     </span>

//                                                     <span class="dis-block t-center txt8">
//                                                         Days
//                                                     </span>
//                                                 </div>

//                                                 <div class="size11 flex-col-c-m">
//                                                     <span class="dis-block t-center txt7 m-b-2 hours">
//                                                         12
//                                                     </span>

//                                                     <span class="dis-block t-center txt8">
//                                                         Hours
//                                                     </span>
//                                                 </div>

//                                                 <div class="size11 flex-col-c-m">
//                                                     <span class="dis-block t-center txt7 m-b-2 minutes">
//                                                         59
//                                                     </span>

//                                                     <span class="dis-block t-center txt8">
//                                                         Minutes
//                                                     </span>
//                                                 </div>

//                                                 <div class="size11 flex-col-c-m">
//                                                     <span class="dis-block t-center txt7 m-b-2 seconds">
//                                                         56
//                                                     </span>

//                                                     <span class="dis-block t-center txt8">
//                                                         Seconds
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             <a href="#" class="txt4 m-t-40">
//                                                 View Details
//                                                 <i class="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         </Carousel.Item>
//                         </div>
//                     </Carousel>

//                     </div>

//                     <div class="wrap-slick2-dots"></div>
//                 </div>
              
//             </section>

       
//     )
// }

// export default Events
