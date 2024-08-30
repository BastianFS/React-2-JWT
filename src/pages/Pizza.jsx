import { useState, useEffect } from "react";

function Pizza(){

    const [pizza, setPizza] = useState([])

    useEffect(() => {getData();}, []);

    const url = "http://localhost:5000/api/pizzas/p001";
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPizza(data)};

    return(
        <>
            <div>
                <h1 className="pizzaTitle">{pizza.name}</h1>
                <div className="pizzaImgCont">
                    <img className="pizzaImg" src={pizza.img} alt={pizza.name}/>
                </div>
                <p className="pizzaDesc">{pizza.desc}</p>
                <p className="pizzaDesc">Ingredientes</p>
                <ul className="pizzaList">
                    {pizza.ingredients?.map((ing, index) => (
                    <li className="pizzaLi" key={index}>{ing}</li>))}
                </ul>
                <p className="pizzaPrice">${pizza.price}</p>
            </div>
        </>
    )
}
export default Pizza