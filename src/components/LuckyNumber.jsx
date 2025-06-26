
import styles from "./LuckyNumber.module.css";
import { useState } from "react";

export function LuckyNumber() {

  const [luckyNumber, setLuckyNumber] = useState(0);
  const [saveNumber, setSaveNumber] = useState([]);
  const [message, setMessage] = useState("");

  
  function handleClick() {
    const number = Math.ceil(Math.random() * 31);

    if (saveNumber.includes(number)) {
      setMessage(`Número ${number} já foi sorteado!`);
    } else {
      setLuckyNumber(number);
      setSaveNumber((prev) => [...prev, number]);
      setMessage(`Número ${number} sorteado com sucesso!`);
    }
  }

  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        className={styles.button}
      >
        Clique e sorteie
      </button>

      {message && (
        <p className={styles.message}>{message}</p>
      )}
    </div>
  );
}

export default LuckyNumber;
