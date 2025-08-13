import styles from "./Login.module.css";

export function Login() {
  return (
    <div className={styles.loginBox}>
      <h2>Login</h2>
      <form>
        <label>E-mail</label>
        <input type="email" placeholder="Digite seu e-mail" required />
        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}