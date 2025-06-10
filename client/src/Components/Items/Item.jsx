import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
    return (
        <div className='items'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} className='item-image' src={props.image} alt="" /></Link>
            <p className='item-name'>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    ${props.new_price}
                </div>
                <div className='item-price-old'>
                    ${props.old_price}
                </div>
            </div>
            <button className='item-cart'>Add to cart</button>
        </div>
    )
}

export default Item