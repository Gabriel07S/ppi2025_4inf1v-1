import { Link, useLocation } from "react-router-dom";
import { ShoppingBasket, LogIn, UserPlus, PackageCheck } from "lucide-react";
import styles from "./Header.module.css";
import gabumLogo from "./Gabum-logo.png";

export function Header({ cart }) {
  const location = useLocation();
  const total = cart.reduce(
    (acc, item) => acc + Number(item.price) * (item.quantity || 1),
    0
  );

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <div className={styles.logoArea}>
          <img src={gabumLogo} alt="Gabum logo" className={styles.logo} />
        </div>
      </Link>

      {/* Centralização e botões */}
      <nav className={styles.navLinks}>
        <Link to="/login" className={styles.navButton}>
          <LogIn size={22} />
          <span>Login</span>
        </Link>
        <Link to="/register" className={styles.navButton}>
          <UserPlus size={22} />
          <span>Cadastro</span>
        </Link>
        <Link to="/manage-products" className={styles.navButton}>
          <PackageCheck size={22} />
          <span>Gerenciar Produtos</span>
        </Link>
      </nav>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        {location.pathname === "/cart" && (
          <Link to="/" className={styles.backBtn}>
            Voltar
          </Link>
        )}
        <Link to="/cart" className={styles.link}>
          <div className={styles.cartInfo}>
            <ShoppingBasket size={24} />
            {cart.length > 0 && <p>{cart.length} produtos</p>}
            <p>Total: ${total.toFixed(2)}</p>
          </div>
        </Link>
        <span className="cart-icon-wrapper">
          <ShoppingBasket size={24} />
          {cart.length > 0 && (
            <span className="cart-badge">
              {cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
