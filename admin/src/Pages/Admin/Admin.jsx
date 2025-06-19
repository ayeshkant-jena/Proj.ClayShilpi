import React from "react";
import './Admin.css'
import Sidebar from "../../Components/Sidebar/Sidebar";
import {Routes, Route} from 'react-router-dom'
import AddProduct from '../../Components/Addproduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Dashboard from "../../Components/Dashboard/Dashboard";

const Admin = ()=>{
    return(
        <div className="admin">
            <Sidebar/>
            <Routes>
                <Route path="/addproduct" element={<AddProduct/>} />
                <Route path="/listproduct" element={<ListProduct/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </div>
    )
}

export default Admin