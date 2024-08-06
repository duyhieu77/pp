import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Login from './components/Register/Login';
import Registers from './components/Register/Register';
import Cake from './components/Shop/Cake/Cake';
import Coffee from './components/Shop/Drink/Coffee';
import Marchandise from './components/Shop/Marchandise';
import Modal from "./components/Modal";
import { CartProvider } from './components/Context/CartContext';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 50,
    });
  }, []);

  function NotFound() {
    return <h1>404 - Not Found</h1>;
  };

  return (
    <CartProvider>
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Home />
            <Services />
            <Testimonial />
           
          </>} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Registers/>} />
          <Route path="/shop/cake" element={<Cake onProductClick={handleProductClick} />} />
          <Route path="/shop/coffee" element={<Coffee onProductClick={handleProductClick} />} />
          <Route path="/shop/marchandise" element={<Marchandise onProductClick={handleProductClick} />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
         {selectedProduct && <Modal product={selectedProduct} onClose={handleClose} />}
      <Footer />
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
