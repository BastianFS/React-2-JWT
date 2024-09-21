import { Button } from "react-bootstrap";

function CardPizza(props) {
  
  return (
    <>
      <div className="card">
        <h2 className="cardTitle">{props.name}</h2>
        <div className="cardImgCont">
          <img src={props.img} className="cardImg" />
        </div>
        <h4 className="ing">Ingredientes:</h4>
        <ul className="cardList">
          {props.ingredients.map((ing, index) => (
            <li key={index} className="ing">{ing}</li>
          ))}
        </ul>
        <p className="cardPrice">${props.price}</p>
        <Button onClick={() => {
                            setPriceTotal(priceTotal - pizza.price);
                            setItemQty(itemQty - 1);
                        }}>
                        -
                        </Button>
                        <p className="cardQty">{itemQty}</p>
                        <Button onClick={() => {
                            setPriceTotal(priceTotal + pizza.price);
                            setItemQty(itemQty - 1);
                        }}> 
                        +
                        </Button>
      </div>
    </>
  );
}

export default CardPizza;
