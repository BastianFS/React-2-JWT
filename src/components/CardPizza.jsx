function CardPizza (props) { 

    return(
        <>
            <div className="card">
                <h2 className="cardTitle">{props.name}</h2>
                <div className="cardImgCont">
                    <img src={props.img} className="cardImg"/>
                </div>
                <h5 className="cardDesc">{props.desc}</h5>
                <ul className="cardIng">
                    {props.ingredients.map(((ingredient,index) => <li key={index}>{ingredient}</li>))}
                </ul>
                <p className="cardPrice">${props.price}</p>
            </div>
        </>
    )
}

export default CardPizza