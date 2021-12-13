import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getAuth} from 'firebase/auth';
import Registration from '../../Registration/Registration';
import './NavbarShopping.css'

const NavbarShopping = ({totalItems}) => {
    var space = (<>&nbsp;</>);///Space in React
    console.log("totalItems"+totalItems)

    const auth=getAuth();       
    const [user, setUser]=useState(null);
        useEffect((user) => {
            auth.onAuthStateChanged(user=>{
            setUser(user)
        })
        });
    return (
        <div>
             <nav className="navbar nav-shopping navbar-expand-sm navbar-light bg-white border-bottom mt-2">
                {" "}
                <a className="navbar-brand ml-2 font-weight-bold" href="#">
                <span id="burgundy">YAMMY {space} </span>
                <span id="orange"> Restaurant Meals</span>
                </a>{" "}
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor"
                aria-controls="navbarColor"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                {" "}
                <span className="navbar-toggler-icon"></span>{" "}
                </button>
                <div className="collapse navbar-collapse" id="navbarColor">
                <ul className="navbar-nav">
                    
                    {/* <li className="nav-item rounded bg-light search-nav-item">
                    <input
                        type="text"
                        id="search"
                        className="bg-light"
                        placeholder="Search bread, cakes, desserts"
                    />
                    <span className="fa fa-search text-muted"></span>
                    </li> */}
                    
                    <li className="nav-item ">
                    <Link to="/cart" class="cart position-relative d-inline-flex" aria-label="View your shopping cart">
                        <i class="fas fa fa-shopping-cart fa-lg"></i>
                        <span class="cart-basket d-flex align-items-center justify-content-center">
                            {totalItems}
                        </span>
                    </Link>
                    {/* <a className="nav-link" href="#">
                        
                        <span className="fa fa-shopping-cart "></span>
                        <span className="text span-shopping">2</span>
                    </a>{" "} */}
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavbarShopping
