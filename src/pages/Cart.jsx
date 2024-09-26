
import { useContext } from "react"
import { CartContext } from "../context/CartContext";
import { Button, Card, Container } from "react-bootstrap";
import { PizzaQtyContext } from "../context/PizzaQtyContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"
import { PizzaContext } from "../context/PizzaContext";
import { UserContext } from "../context/UserContext";


function Cart(){


    const {priceTotal , setPriceTotal} = useContext(CartContext)
    const {pizzaQty , setPizzaQty} = useContext(PizzaQtyContext)
    const {pizza} = useContext(PizzaContext)
    const {token} = useContext(UserContext)

    const handleDecrement = (index) =>{
        const newQtyArray = [...pizzaQty];
        if(newQtyArray[index] > 0){
        newQtyArray[index] -= 1;
        setPizzaQty(newQtyArray);
        setPriceTotal(priceTotal - pizza[index].price);
        }}  

    const handleIncrement = (index) =>{
        const newQtyArray = [...pizzaQty];
        newQtyArray[index] += 1;
        setPizzaQty(newQtyArray);
        setPriceTotal(priceTotal + pizza[index].price);
        }  
    return(
          <>
            <Navigation/>
            {pizza.map((pizza, index) =>
            (pizzaQty[index] === 0 ? <></>:
              <div className="cardGroup"> 
                      <Card key={pizza.id} style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={pizza.img} />
                      <Card.Body>
                      <Card.Title className="text-white">{pizza.name}</Card.Title>
                      <Card.Text>
                      <p className="cardPrice">${pizza.price}</p>
                      </Card.Text>
                      <div className="d-flex justify-content-center align-items-center">
                          <Button className="ps-4 pe-4 p-3 text-white" onClick={() => handleDecrement(index)}>                            
                              -
                          </Button>
                          <p className="align-items-center text-white p-4">{pizzaQty[index]}</p>
                          <Button className="ps-4 pe-4 p-3 text-white align-items-center" onClick={() => handleIncrement(index)}>
                              +
                          </Button>
                      </div>
                      </Card.Body>
                      </Card>
                  </div>
            ))}
                <h1 className="p-4 text-center">Precio Total: {priceTotal} </h1>
                {token ? <Container className="d-flex justify-content-center"><Button className="p-4 m-4">Pagar</Button></Container>: null}
                <Footer/>
              </>
    );
}

export default Cart