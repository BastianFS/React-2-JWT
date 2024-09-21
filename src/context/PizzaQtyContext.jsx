import { createContext, useContext, useState } from "react";

export const PizzaQtyContext = createContext();

const PizzaQtyProvider = ({ children }) => {
    
    const [pizzaQty, setPizzaQty] = useState([]);
        
    return (
            <PizzaQtyContext.Provider value={{pizzaQty, setPizzaQty }}>
            {children}
            </PizzaQtyContext.Provider>
    );
};

export default PizzaQtyProvider;