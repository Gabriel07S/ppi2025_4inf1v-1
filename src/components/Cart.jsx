import { useState, useEffect } from "react"; 
import styles from "./Cart.module.css";

export function Cart({ cart, setCart }) {
  // Função pra aumentar a quantidade
  const increaseQuantity = (index) => {
    const novoCarrinho = [...cart];
    novoCarrinho[index].quantity = (novoCarrinho[index].quantity || 1) + 1;
    setCart(novoCarrinho);
  };

  // Função pra diminuir a quantidade (mínimo 1)
  const decreaseQuantity = (index) => {
    const novoCarrinho = [...cart];
    if (novoCarrinho[index].quantity > 1) {
      novoCarrinho[index].quantity -= 1;
      setCart(novoCarrinho);
    } else {
      // Remove o produto do carrinho se a quantidade for 1
      novoCarrinho.splice(index, 1);
      setCart(novoCarrinho);
    }
  };

  // Função pra remover todos os itens
  const removerTodosItens = () => {
    setCart([]);
  };

  // Calcular o total dos produtos
  const totalProdutos = cart.reduce(
    (acc, item) => acc + Number(item.price) * (item.quantity || 1),
    0
  );

  // Estados pra serviços
  const [garantiaEstendida, setGarantiaEstendida] = useState(false);
  const [parcelamento, setParcelamento] = useState(false);
  const [totalServicos, setTotalServicos] = useState(0);

  // Atualizar total de serviços
  useEffect(() => {
    const valorGarantia = garantiaEstendida ? 15 : 0; // R$15 pra garantia estendida
    const valorParcelamento = parcelamento ? 0 : 0; // Parcelamento sem custo extra como exemplo
    setTotalServicos(valorGarantia + valorParcelamento);
  }, [garantiaEstendida, parcelamento]);

  // Total geral
  const totalGeral = totalProdutos + totalServicos;

  return (
    <div className={styles.cart}>
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <button
            className={styles.removeAllBtn}
            onClick={removerTodosItens}
          >
            Remover Todos os Itens
          </button>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p>R${product.price.toFixed(2)}</p>
                <div className={styles.quantityControl}>
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <span>{product.quantity || 1}</span>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                  {/* Botão da lixeira com emoji */}
                  <button
                    className={styles.trashBtn}
                    onClick={() => {
                      const novoCarrinho = [...cart];
                      novoCarrinho.splice(index, 1);
                      setCart(novoCarrinho);
                    }}
                    title="Remover este item"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.summaryBox}>
            <h3>Resumo do Pedido</h3>
            <p>Subtotal: R${totalProdutos.toFixed(2)}</p>
            <p>Serviços: R${totalServicos.toFixed(2)}</p>
            <p>Total: R${totalGeral.toFixed(2)}</p>
          </div>
          <div className={styles.services}>
            <h3>Serviços Adicionais</h3>
            <div className={styles.serviceOptions}>
              <label>
                <input
                  type="radio"
                  name="servico"
                  checked={garantiaEstendida}
                  onChange={() => {
                    setGarantiaEstendida(true);
                    setParcelamento(false);
                  }}
                />
                Garantia Estendida R$15
              </label>
              <label>
                <input
                  type="radio"
                  name="servico"
                  checked={parcelamento}
                  onChange={() => {
                    setParcelamento(true);
                    setGarantiaEstendida(false);
                  }}
                />
                Opções de Parcelamento (sem custo extra)
              </label>
            </div>
            <p className={styles.serviceTotal}>
              Total Serviços: R${totalServicos.toFixed(2)}
            </p>
          </div>
          <div className={styles.paymentBox}>
            <h3>
              <span role="img" aria-label="Resumo">📋</span> RESUMO
            </h3>
            <p>
              <strong>Valor dos Produtos:</strong> R${totalProdutos.toFixed(2)}
            </p>
            <div className={styles.paymentInstallments}>
              <strong>Total a prazo:</strong> R${totalProdutos.toFixed(2)}
              <br />
              <span style={{ fontSize: "0.95em", color: "#555" }}>
                (em até 10x de R$ {(totalProdutos / 10).toFixed(2)} sem juros)
              </span>
            </div>
            <div className={styles.paymentPix}>
              <strong>Valor à vista no <span style={{ color: "#008000" }}>PIX</span>:</strong>
              <span style={{ color: "#008000", fontWeight: "bold" }}>
                R${(totalProdutos * 0.9).toFixed(2)}
              </span>
              <br />
              <span style={{ color: "#008000" }}>
                (Economize: R${(totalProdutos - totalProdutos * 0.9).toFixed(2)})
              </span>
            </div>
          </div>
          <button className={styles.continueBtn}>Continuar</button>
        </>
      )}
    </div>
  );
}