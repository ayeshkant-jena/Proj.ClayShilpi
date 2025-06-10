import React, { useContext, useState } from "react"
import './Navbar.css'
import cart from '../Assets/cart.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const{getTotalCartItems} = useContext(ShopContext);

    return (
        <div className="navbar">
            <div className="nav-logo">
                {/* <p>CLAYSHILPI</p> */}
                {/* CLAYSHILPI */}
                <li onClick={()=>{setMenu("home")}} className={menu === "home" ? "active-link" : ""}><Link style={{textDecoration: 'none', color: 'inherit', cursor:'default'}} to="/">CLAYSHILPI</Link> {menu==="home"? <hr/>:<></>}</li>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}} className={menu === "home" ? "active-link" : ""}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/">Home</Link> {menu==="home"? <hr/>:<></>}</li>

                <li onClick={()=>{setMenu("product")}} className={menu === "product" ? "active-link" : ""}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/AllProducts">Product</Link> {menu==="product"? <hr/>:<></>}</li>

                <li onClick={()=>{setMenu("shop")}} className={menu === "shop" ? "active-link" : ""}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/Shop">Shop</Link> {menu==="shop"? <hr/>:<></>}</li>

                <li onClick={()=>{setMenu("explore")}} className={menu === "explore" ? "active-link" : ""}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/Explore">Explore</Link> {menu==="explore"? <hr/>:<></>}</li>

                <li onClick={()=>{setMenu("about")}} className={menu === "about" ? "active-link" : ""}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/About">About</Link> {menu==="about"? <hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>}
                
                <Link to='/cart'><img src={cart} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar