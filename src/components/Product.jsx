import styles from "./Product.module.css";

export function Product({ thumbnail, title, description, price }) {
  return (
      <div className={styles.card}>
 <img src={thumbnail} alt={title} className={styles.image} />
 <h2>{title}</h2>
<p>{description}</p>
 <p>R$ {price}</p>
<button>Adicionar ao carrinho</button>
</div>
);
}
                                          