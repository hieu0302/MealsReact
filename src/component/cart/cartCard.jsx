import "./cartCard.css"
const CartCard = (props) =>{
    const {data} = props
   const {id, name, image, price, inputValue} = data;
   console.log(data.id)
    return(
        <div className="cartCard" style={{display:"flex"}}>
          <h2>{name}</h2>
          <h5>{price}</h5>
          <h5>{inputValue}</h5>
        
        </div>
    )
}

export default CartCard;