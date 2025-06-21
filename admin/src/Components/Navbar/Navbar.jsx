import React from "react";
import './Navbar.css'
import logo from '../../assets/clayshilpilogo.png'

const Navbar = () =>{
    return (
        <div className="navbar">
            <img src={logo} alt="" className="nav-logo"/>
            {/* <img src="" className="nav-profile" alt="" /> */}
            <h1>Clayshilpi Admin Control</h1>
            <button>Logout</button>
        </div>
    )
}

export default Navbar
//6:09:27