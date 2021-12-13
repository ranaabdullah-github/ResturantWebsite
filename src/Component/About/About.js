import React,{Component} from "react";
import "./Style-About.css";
class About extends Component{
    render(){
        return(
            //  ======= About Section ======= 
            <div>
                <section id="about" className="about">
                    <div className="container pl-2" data-aos="fade-up">

                       <div className="row">
                       
                        <div className="col-lg-6 order-1 order-lg-2 pt-2 " data-aos="zoom-in" data-aos-delay="100">
                            <div className="about-img pb-3">
                            <img src="images/about.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1  content">
                            <h3 className="pt-2">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>
                            <ul>
                            <li><i className="fa fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="fa fa-check-circle"></i>  Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="fa fa-check-circle"></i>  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p className="pb-2">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                        </div>

                    </div>
                </section>{/*End About Section */} 
            </div>
   
        )

    }
}
export default About;