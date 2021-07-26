import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false); 
    
  const cartStatus = inCart? 'in-cart' : '';

  function handleClick(){ 
    setInCart((inCart) => (!inCart))
  }

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category" >{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
