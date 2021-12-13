import React, { Component } from 'react'
import './Tapbar.css';
export class Tapbar extends Component {
    render() {
        return (
            <div>
                  {/* ======= Top Bar =======  */}
                    <div id="topbar" className="d-flex align-items-center fixed-top">
                        <div className="container d-flex justify-content-center justify-content-md-between">

                        <div className="contact-info d-flex align-items-center">
                            <i className="fa fa-phone  d-flex align-items-center" aria-hidden="true"><span>+1 5589 55488 55</span></i>
                            <i className="fa fa-clock d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 23PM</span></i>
                        </div>

                        <div className="languages d-none d-md-flex align-items-center">
                            <ul>
                            <li>En</li>
                            <li><a href="#">Ar</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Tapbar
