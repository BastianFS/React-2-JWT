import { createContext, useState, useEffect} from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
    
    const [pizza, setPizza] = useState([]);

    useEffect(() => {getData();}, []);

    const url = "http://localhost:5000/api/pizzas";
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPizza(data);}
   
    return (
            <PizzaContext.Provider value={{pizza, setPizza }}>
            {children}
            </PizzaContext.Provider>
    );
};

export default PizzaProvider
