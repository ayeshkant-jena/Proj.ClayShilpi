
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Explore from './Pages/Explore';
import About from './Pages/About';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer'
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>

        <Route path="/idol" element={<ShopCategory category="idol"/>}/>
        <Route path="/showpiece" element={<ShopCategory category="showpiece"/>}/>
        <Route path="/toy" element={<ShopCategory category="toy"/>}/>
        <Route path="/household" element={<ShopCategory category="household"/>}/>

        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
         
        <Route path="/cart" element={<Cart/>}/>

        <Route path="/explore" element={<Explore/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
