import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { useState } from "react";
import { Route, Routes } from "react-router";
import { Cart } from "./components/Cart";

export default function App() {
  
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        // Se já existe, aumenta a quantidade
        const novoCarrinho = [...prevCart];
        novoCarrinho[index].quantity = (novoCarrinho[index].quantity || 1) + 1;
        return novoCarrinho;
      } else {
        // Se não existe, adiciona com quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  return (
    //React Fragment
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}