import styles from "./ProductForm.module.css";

export function ProductForm({ onSubmit, initialData }) {
  return (
    <form className={styles.formBox} onSubmit={onSubmit}>
      <label>Nome do Produto</label>
      <input name="title" defaultValue={initialData?.title || ""} required />
      <label>Descrição</label>
      <input name="description" defaultValue={initialData?.description || ""} required />
      <label>Preço</label>
      <input name="price" type="number" step="0.01" defaultValue={initialData?.price || ""} required />
      <button type="submit">{initialData ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
}