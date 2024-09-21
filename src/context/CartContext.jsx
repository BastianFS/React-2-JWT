import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    
    const [priceTotal, setPriceTotal] = useState(0);
        
    return (
            <CartContext.Provider value={{ priceTotal, setPriceTotal }}>
            {children}
            </CartContext.Provider>
    );
};

export default CartProvider;