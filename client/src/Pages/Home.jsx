
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './CSS/Home.css'
import img1 from '../Components/Assets/img1.png'
import img2 from '../Components/Assets/img2.png'
import img3 from '../Components/Assets/img3.png'
import img4 from '../Components/Assets/img4.png'
import craftsman1 from '../Components/Assets/craftsman1.jpg'
import craftsman2 from '../Components/Assets/craftsman2.jpg'
import craftsman3 from '../Components/Assets/craftsman3.jpg'

const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const textBoxes = [
        {
            title: "Beautiful Clay Idols",
            description:
            "Various types and varieties of clay idols are available. Use them to make your surroundings feel more spiritual in an eco-friendly way.",
        },
        {
            title: "Variety of Clay Products",
            description:
            "We have got a wide range of clay items and everyday usable items available in reasonable price tags to fit your pocket while keeping you connected to your roots.",
        },
        {
            title: "Mesmerizing Showpieces",
            description:
            "Check out our range of showpieces which will help you decor your place and add a subtle touch to it.",
        },
        {
            title: "Clay Toys for Littles",
            description:
            "We've also got a small range of toy products that will help engage your little minds to be creative.",
        },
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textBoxes.length);
        }, 5500);
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [textBoxes.length]);    
    
    return (
        <div>

            <section className="home" id="home">
            <div className="banner1">
                {/* Render the current text box */}
                <div className="textbox">
                    <h1>{textBoxes[currentIndex].title}</h1>
                    <span></span>
                    <p>{textBoxes[currentIndex].description}</p>
                </div>
            </div>

                <div className="wrapper">
                    <div className="item item1"><img src={img1} alt="Item 1" /></div>
                    <div className="item item2"><img src={img2} alt="Item 2" /></div>
                    <div className="item item3"><img src={img3} alt="Item 3" /></div>
                    <div className="item item4"><img src={img4} alt="Item 4" /></div>
                </div>
            </section>

            <section className="SkilledCraftsmanship">
                <div className="SC-textbox">
                    <h1>Over more than 1000 of Skilled Craftsmen</h1>
                    <span></span>
                    <p>We have over more than 1000 skilled shilpakars who work through the bottom of their heart to make sure that our customer receives the product which they wished for. We only hire top qualified craftsmen to ensure the quality of our product to be the best. </p>
                </div>

                <div className="SC-image">
                    <img className="cm1" src={craftsman1} alt="Craftsman 1" />
                    <span></span>
                    <img className="cm2" src={craftsman2} alt="Craftsman 2" />
                    <span></span>
                    <img className="cm3" src={craftsman3} alt="Craftsman 3" />
                </div>
            </section>

            <section className="customer-reviews">
                {/* Add content for customer reviews */}
            </section>

            <Link to="/shop" className="floating-button">Shop Now</Link>

        </div>
    );
}

export default Home;
