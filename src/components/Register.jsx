import styles from "./Login.module.css";

export function Register() {
  return (
    <div className={styles.loginBox}>
      <h2>Cadastro</h2>
      <form>
        <label>Nome</label>
        <input type="text" placeholder="Digite seu nome" required />
        <label>E-mail</label>
        <input type="email" placeholder="Digite seu e-mail" required />
        <label>Senha</label>
        <input type="password" placeholder="Crie uma senha" required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}