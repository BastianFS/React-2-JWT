<<<<<<< HEAD

import { useEffect, useState } from "react"
import CardPizza from "./CardPizza";


function Home(){

    const [pizza, setPizza] = useState([])

    useEffect(() => {getData();}, []);

    const url = "http://localhost:5000/api/pizzas";
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPizza(data)};

    return(
        <>
            <div className="cardGroup">
                {pizza.map( (pizza) => 
                    <CardPizza 
                    key={pizza.id}
                    name={pizza.name}
                    desc={pizza.desc}
                    img={pizza.img}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                />)}
            </div>
        </>
    )
}
=======
import { arrPizzas } from '../pizzas.js'
import CardPizza from './CardPizza'

function Home() {
    
    return(
        <>
            <ul className='cardGroup'>
               {arrPizzas.map((pizza) => <li key={pizza.id}>{CardPizza(pizza)}</li>)} 
            </ul>
           
        </>
    )
}

>>>>>>> main
export default Home