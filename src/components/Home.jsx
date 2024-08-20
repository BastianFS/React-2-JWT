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

export default Home