import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/dropdown.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {

    const {all_products} = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img src={props.banner} alt="" />
            <div className="shopCategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopCategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopCategory-products">
                {
                    all_products.map((item,i)=>{
                        if(props.category===item.category){
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        }
                        else{
                            return null;
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ShopCategory
