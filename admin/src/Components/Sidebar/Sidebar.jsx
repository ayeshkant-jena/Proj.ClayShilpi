import React from "react";
import './Sidebar.css'
import {Link}  from 'react-router-dom'
import add_product_icon from '../../assets/product_cart.svg'
import list_product_icon from '../../assets/product_list.svg'

const Sidebar =  ()=>{
    return(
        <div className="sidebar">
            <Link to={'/dashboard'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={list_product_icon} alt="" />
                    <p>Dashboard</p>
                </div>
            </Link>
            <hr/>
            <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={add_product_icon} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            <hr/>
            <Link to={'/listproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={list_product_icon} alt="" />
                    <p>Product List</p>
                </div>
            </Link>
            <hr/>
        </div>
    )
}

export default Sidebar