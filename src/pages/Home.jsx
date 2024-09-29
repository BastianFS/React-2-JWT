
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";
import { Button, Card } from "react-bootstrap";
import { PizzaQtyContext } from "../context/PizzaQtyContext";
import { PizzaContext } from "../context/PizzaContext"; 
import Navigation from '../components/Navigation.jsx';
import  Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom'


function Home(){

    const {priceTotal , setPriceTotal} = useContext(CartContext);
    const {pizzaQty , setPizzaQty} = useContext(PizzaQtyContext);

    const {pizza} = useContext(PizzaContext);

    useEffect(() => {
        if (pizza.length > 0) {
            setPizzaQty(new Array(pizza.length).fill(0));
        }
    }, [pizza]);

  
    const handleIncrement = (index) =>{
        const newQtyArray = [...pizzaQty];
        newQtyArray[index] += 1;
        setPizzaQty(newQtyArray);
        setPriceTotal(priceTotal + pizza[index].price);
    }   

    const handleDecrement = (index) =>{
        const newQtyArray = [...pizzaQty];
        if(newQtyArray[index] > 0){
        newQtyArray[index] -= 1;
        setPizzaQty(newQtyArray);
        setPriceTotal(priceTotal - pizza[index].price);
        }};

    const navigate = useNavigate();

    const handleClick = (id) => {navigate("/pizza/" + id)};

    return(
        <>
        <Navigation/>
            <div className="cardGroup">
                {pizza.map((pizza, index) => 
                    (<>
                    <Card key={pizza.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pizza.img}/>
                    <Card.Body>
                    <Card.Title className="text-white">{pizza.name}</Card.Title>
                    <Card.Text>
                    <h4 className="text-white">Ingredientes:</h4>
                    <ul className="cardList">
                      {pizza.ingredients.map((ing, index) => (
                        <li key={index} className="ing">{ing}</li>
                      ))}
                    </ul>
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
                    <Button onClick={() => {handleClick(pizza.id)}}>
                      Ver Detalle
                    </Button>
                    </Card.Body>
                    </Card>
                    </>))}
            </div>
        <Footer/>
        </>
    );
}

export default Home