import { createContext } from "react";

export const CartContext = createContext({
    Products:[],
    loading: false,
    error: null,
    addTocart: () => {},
    updateQtyCart: () => {},
    ClearCart: () => {},
});

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function addToCart(product) {
        setCart((prevCart) => {
            const index = prevCart.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                const novoCarrinho = [...prevCart];
                novoCarrinho[index].quantity = (novoCarrinho[index].quantity || 1) + 1;
                return novoCarrinho;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }

    function updateQtyCart(index, quantity) {
        const novoCarrinho = [...cart];
        if (quantity > 0) {
            novoCarrinho[index].quantity = quantity;
        } else {
            novoCarrinho.splice(index, 1);
        }
        setCart(novoCarrinho);
    }

    function ClearCart() {
        setCart([]);
    }
    const context = {
        products: products,
        loading: loading,
        error: error,
        addToCart: addToCart,
        updateQtyCart: updateQtyCart,
        ClearCart: ClearCart,
    };

    return (
        <CartContext.Provider value={context}>{children}</CartContext.Provider>
    );
}
