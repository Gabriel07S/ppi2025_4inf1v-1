import styles from "./MyGrid.module.css";

export function MyGrid() {
  return (
    <div className={styles.container}>
      <header className={styles.header1}>Header 1</header>
      <aside className={styles.asideLeft}>Aside Esquerdo</aside>
      <header className={styles.header2}>Header 2</header>
      <aside className={styles.asideRight}>Aside Direito</aside>

      <main className={styles.main}>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div className={styles.card} key={i}>
              <h2 className={styles.title}>Card {i}</h2>
              <p className={styles.text}>Conteúdo do card {i}.</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer1}>Footer Verde</footer>
      <footer className={styles.footer2}>Footer Rosa</footer>
    </div>
  );
}
