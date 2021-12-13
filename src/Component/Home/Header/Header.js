import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import { Navbar,Nav,NavDropdown,Container,FormControl,Button,Form } from "react-bootstrap";
import Registration from '../../Registration/Registration'

const transition = { duration: 0.33 };

export const Header = ({ typePage }) => {
  const [navbar,setNavbar]=useState(false);
  const changeBackground =() =>{
      if (window.scrollY>=100){
          setNavbar(true)
      }else{
          setNavbar(false)
      }
  }
// -----------------------Show Model-----------------------------

 const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
// --------------------------------------------------------------
  window.addEventListener('scroll',changeBackground);
        return (
            <div >
               {/* <!-- ======= Header ======= --> */}
              
                
                <header id="header" className={navbar ? "fixed-top  header-scrolled":"fixed-top" }>
                <div className={"container-fluid container-xl justify-content-lg-between" }>
               <Navbar expand="lg"  className="navbar order-last order-lg-0">
                                <Navbar.Brand  style={{color:"white"}}><Link to="/">YAMMY Restaurant</Link></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="navbar navbar-expand-lg  justify-content-end" style={{ width: "100%", paddingLeft: "30px",color:"white" }}>
                                      {/* typePage=true the menu transform between sections in one page That is Home Page */}
                                      {/* typePage=false the menu transform between pages in (ViewProducts,Cart,Details) pages */}
                                      {typePage?
                                       <Nav.Link href="#hero">Home</Nav.Link>
                                      :
                                        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                                      }
                                      {typePage?<Nav.Link href="#book-a-table">Contact Us</Nav.Link>
                                      :
                                      <Nav.Link href="#about">Contact Us</Nav.Link>
                                      }
                                      {typePage?<Nav.Link href="#menu">Menu</Nav.Link>
                                      :
                                      <Nav.Link><Link to="/viewproducts">Menu</Link></Nav.Link>
                                      }
                                    <Link><a href="#book-a-table" className="book-a-table-btnNav scrollto d-none d-lg-flex">Book a table</a></Link>
                                    <li style={{fontSize:"20px"}}><i  onClick={openModal}  class="user-login fa fa-user"  aria-hidden="true" data-toggle="modal" data-target=".login-register-form"></i></li>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <div class="modal fade login-register-form" role="dialog">
                            <Link><a href="#book-a-table" className="book-a-table-btnNav scrollto d-none d-lg-flex">Book a table</a></Link>
                              </div>
                      </div>
                      <Registration showModal={showModal} setShowModal={setShowModal}/>
                  </header>
                {/* <!-- ======= Header ======= --> */}
              {/* <Registration showModel={show} setShowModel={setShow}/> */}
            </div>
        )
}
export default Header

