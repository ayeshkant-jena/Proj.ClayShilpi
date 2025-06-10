import React from "react";
import Hero from "../Components/Hero/Hero";
import './CSS/Shop.css';
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import magnifyingglass from "../Components/Assets/search.png";

const Shop = () => {


    return (
        <div>
            <span className="span"></span>
            <div className="search-bar">
                <div className="searchbox">
                    <input class="search" type="text" name="" placeholder="What are you searching for?"/>
                    <button><img src={magnifyingglass} alt="" /></button>
                </div>
            </div>
            <Hero/>
            <Popular />
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )
}

export default Shop
