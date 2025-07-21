import { Link, useLocation } from "react-router-dom"; // Adicionando useLocation
import { ShoppingBasket } from "lucide-react";
import styles from "./Header.module.css";
import gabumLogo from "./Gabum-logo.png"; // ajuste o nome conforme o real

export function Header({ cart }) {
  const location = useLocation(); // Pega a rota atual
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
            <p>Total: R${total.toFixed(2)}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}