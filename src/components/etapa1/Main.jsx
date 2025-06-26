import styles from "./Main.module.css";

export default function Main() {
  const cards = [
    { id: 0, title: "Card 0", text: "Conteúdo do card 0" },
    { id: 1, title: "Card 1", text: "Conteúdo do card 1" },
    { id: 2, title: "Card 2", text: "Conteúdo do card 2" },
    { id: 3, title: "Card 3", text: "Conteúdo do card 3" },
    { id: 4, title: "Card 4", text: "Conteúdo do card 4" },
    
  ];

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img
              src={`https://picsum.photos/300/200?random=${card.id}`}
              alt={`Imagem aleatória ${card.id}`}
              className={styles.imagePlaceholder}
            />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
