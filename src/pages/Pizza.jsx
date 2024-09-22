
import { useContext } from "react"
import { Button, Card, Container } from "react-bootstrap"; 
import { PizzaContext } from "../context/PizzaContext"; 
import Navigation from '../components/Navigation.jsx';
import  Footer from '../components/Footer.jsx';
import { useParams, useNavigate } from "react-router-dom";


function Pizza(){

    const {pizza} = useContext(PizzaContext);

    const {id} = useParams();
    
    const pizzaId = pizza.find(pizza => pizza.id == id)

    const navigate = useNavigate();

    const handleClick = () => {navigate("/")}

    return(
        <>
        <Navigation/>
        <Container className ="d-flex justify-content-center p-4">
            <Card>
                <Card.Img variant="top" src={pizzaId.img}/>
                <Card.Body>
                    <Card.Title className="text-white">{pizzaId.name}</Card.Title>
                    <Card.Text>
                        <h4 className="text-white">Ingredientes:</h4>
                        <ul className="cardList">
                        {pizzaId.ingredients.map((ing, index) => (
                            <li key={index} className="ing">{ing}</li>
                        ))}
                        </ul>
                        <p className="cardPrice">${pizzaId.price}</p>
                    </Card.Text>
                    <Button onClick={handleClick}>
                        Volver
                    </Button>
                </Card.Body>
            </Card>
        </Container>
        <Footer/>
        </>
    );
}

export default Pizza
