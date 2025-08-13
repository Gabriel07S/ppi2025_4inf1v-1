import { useState } from "react";
import { ProductForm } from "./ProductForm";
import styles from "./ProductManagment.module.css";

export function ProductManagment() {
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleAdd(e) {
    e.preventDefault();
    const form = e.target;
    const newProduct = {
      title: form.title.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
    };
    setProducts([...products, newProduct]);
    form.reset();
  }

  function handleEdit(e) {
    e.preventDefault();
    const form = e.target;
    const updatedProduct = {
      title: form.title.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
    };
    setProducts(products.map((p, i) => (i === editIndex ? updatedProduct : p)));
    setEditIndex(null);
    form.reset();
  }

  function handleRemove(index) {
    setProducts(products.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.manageBox}>
      <h2>Gerenciar Produtos</h2>
      <ProductForm onSubmit={editIndex === null ? handleAdd : handleEdit} initialData={products[editIndex]} />
      <ul className={styles.productList}>
        {products.map((product, idx) => (
          <li key={idx} className={styles.productItem}>
            <strong>{product.title}</strong> - R${product.price.toFixed(2)}
            <br />
            <span>{product.description}</span>
            <div>
              <button onClick={() => setEditIndex(idx)}>Editar</button>
              <button onClick={() => handleRemove(idx)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}