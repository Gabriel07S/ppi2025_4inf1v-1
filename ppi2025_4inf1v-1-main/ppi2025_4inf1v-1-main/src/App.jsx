import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Cart } from "./components/Cart";
import { CartProvider } from "./service/CartContext";

export default function App() {
  console.log('App carregado');

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}
