function CartPizza (props) { 

    return(
        <>
            <div className="card">
                <h2 className="cardTitle">{props.name}</h2>
                <div className="cardImgCont">
                    <img src={props.img} className="cardImg"/>
                </div>
                <p className="cardPrice">${props.price}</p>
            </div>
        </>
    )
}

export default CartPizza