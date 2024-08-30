import { useState } from "react" 
//import { arrPizzas } from "../pizzas.js"

function Cart() {

    //const [qty, setQty] = useState(Array(arrPizzas.length).fill(1));

    //const [total, setTotal] = useState(0);
    
   
    /*const agregarQty = (index) =>{
        let newQty = [...qty];
        newQty[index] += 1;
        setQty(newQty);
        actTotal();
    }

    const quitarQty = (index) =>{
        let newQty = [...qty];
        if(newQty[index] > 0){
            newQty[index] -= 1;
            setQty(newQty);
        }
        actTotal(); 
    }

    const PizzaCard = ({ pizza, quantity, onAdd, onSubtract }) => {

        return (
          <div className="card">
            <h3 className="cardTitle">{pizza.name}</h3>
            <div className="cardImgCont">   
                <img src={pizza.img} alt={pizza.name} className="cardImg" />
            </div>
            <p className="cardPrice">${pizza.price}</p>
            <div className="cardQtyGroup">
              <button onClick={onSubtract} className="cardBtn">-</button>
              <span className="cardQty">{quantity}</span>
              <button onClick={onAdd} className="cardBtn">+</button>
            </div>
          </div>
        );
      };

    function actTotal(){
        const arr1 = arrPizzas.map((pizza,index) => qty[index] * pizza.price);
        const numTotal = arr1.reduce((acc,cV ) => acc + cV);
        setTotal(numTotal);
    }
          <div className="totalNavbar">
                <h1 className="totalh1">
                    Total: ${total}
                </h1>
                <button className="cardBtn">Pagar</button>
            </div>
            <div className="cardGroup">
                {arrPizzas.map((pizza, index) => (qty[index] > 0 ?
                <PizzaCard
                    key={index}
                    pizza={pizza}
                    quantity={qty[index]}
                    onAdd={() => agregarQty(index)}
                    onSubtract={() => quitarQty(index)}
                />: "")
            )}  
            </div>
    */
    return(
        <>
        </>
    )
}

export default Cart