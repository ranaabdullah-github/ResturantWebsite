import React, { Component } from 'react'
import { Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css'

export class Slider extends Component {
    render() {
        return (
            <div className="slide">
            <Carousel fade interval={6000}>
            <Carousel.Item>
              
              <img
                className="d-block w-100"
                src="images/SlidesMainMenu/master-slides-01.jpg"
                alt="First slide"
                height="560px"
              />
              <Carousel.Caption>
              <span class="caption1-slide1 txt1 t-center animated visible-false m-b-15" data-appear="rotateInDownLeft">
                Welcome to
              </span>

              <h2 class="caption2-slide1 tit1 t-center animated visible-false m-b-37" data-appear="rotateInUpRight">
                YAMMY Resturant
              </h2>

                {/* <h3>New Collection</h3>
                <p>RUN WITH HI ENERGY​</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/SlidesMainMenu/master-slides-02.jpg"
                alt="Second slide"
                height="560px"
              />
              <Carousel.Caption>
              <h3>Spend the Good Time</h3>
              <p>With Delicious Food​</p>
              </Carousel.Caption>
             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/SlidesMainMenu/master-slides-03.jpg"
                alt="Third slide"
                height="560px"
              />
          
              <Carousel.Caption>
              <h3>Yammy Resturant Very Comfortable</h3>
              <p>Welcom To Resturant​</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            </div>
        )
    }
}

export default Slider
