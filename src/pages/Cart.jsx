import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Card, Container } from "react-bootstrap";
import { PizzaQtyContext } from "../context/PizzaQtyContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { PizzaContext } from "../context/PizzaContext";
import { UserContext } from "../context/UserContext";

function Cart() {
  const { priceTotal, setPriceTotal } = useContext(CartContext);
  const { pizzaQty, setPizzaQty } = useContext(PizzaQtyContext);
  const { pizza } = useContext(PizzaContext);
  const { token } = useContext(UserContext);
  const tokenMe = token?.token;
  const [carrito, setCarrito] = useState([]);
  

  const handleDecrement = (index) => {
    const newQtyArray = [...pizzaQty];
    if (newQtyArray[index] > 0) {
      newQtyArray[index] -= 1;
      setPizzaQty(newQtyArray);
      setPriceTotal(priceTotal - pizza[index].price);
      updateCart(index, newQtyArray[index]);
    }
  };

  const handleIncrement = (index) => {
    const newQtyArray = [...pizzaQty];
    newQtyArray[index] += 1;
    setPizzaQty(newQtyArray);
    setPriceTotal(priceTotal + pizza[index].price);
    updateCart(index, newQtyArray[index]);
  };

  const updateCart = (index, quantity) => {
    const updatedCarrito = [...carrito];
    const pizzaItem = pizza[index];

    const itemIndex = updatedCarrito.findIndex(
      (item) => item.id === pizzaItem.id
    );
    if (itemIndex >= 0) {
      if (quantity > 0) {
        updatedCarrito[itemIndex].quantity = quantity;
      } else {
        updatedCarrito.splice(itemIndex, 1);
      }
    } else if (quantity > 0) {
      updatedCarrito.push({ id: pizzaItem.id, quantity });
    }

    setCarrito(updatedCarrito);
  };
const checkOut = (tokenMe) => {
    if (tokenMe) {
      fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenMe}`,
        },
        body: JSON.stringify({
          cart: carrito,
        }),
      });
    }
  };

  const handlePay = (tokenMe) =>{
    checkOut(tokenMe);
    alert(JSON.stringify(carrito))
  }
  return (
    <>
      <Navigation />
      {pizza.map((pizza, index) =>
        pizzaQty[index] === 0 ? (
          <></>
        ) : (
          <div className="cardGroup">
            <Card key={pizza.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pizza.img} />
              <Card.Body>
                <Card.Title className="text-white">{pizza.name}</Card.Title>
                <Card.Text>
                  <p className="cardPrice">${pizza.price}</p>
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    className="ps-4 pe-4 p-3 text-white"
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </Button>
                  <p className="align-items-center text-white p-4">
                    {pizzaQty[index]}
                  </p>
                  <Button
                    className="ps-4 pe-4 p-3 text-white align-items-center"
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        )
      )}
      <h1 className="p-4 text-center">Precio Total: {priceTotal} </h1>
      {tokenMe ? (
        <Container className="d-flex justify-content-center">
          <Button className="p-4 m-4" onClick={() => handlePay(tokenMe)}>Pagar</Button>
        </Container>
      ) : null}
      <Footer />
    </>
  );
}

export default Cart;
