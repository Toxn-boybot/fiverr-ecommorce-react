import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/cartContext";
import items from "./../src/Data/items.json";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Marquee from "./components/marquee/Marquee";
import Offers from "./components/offers/Offers";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Menu from "./components/menu/Menu";

function App() {
  // const [cart, setCart] = useState([]);

  // const addToCart = (item) => {
  //   setCart((prevCart) => [...prevCart, item]);
  // };

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
  };
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Carousel />
        <Marquee />
        <Menu items={items} />
      </CartProvider>
      <Offers />
      <About />
      <Contact />
      <ToastContainer {...toastOptions} />
    </div>
  );
}

export default App;
