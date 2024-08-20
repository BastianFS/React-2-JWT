import {CardPizza} from "./CardPizza"
import {arrPizzas} from "../pizzas"
function Home(){

    return(
        <>
            {arrPizzas.map= (pizza => <CardPizza/>)}
        </>
    )
}
export default Home