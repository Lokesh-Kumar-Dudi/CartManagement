import { React, useContext } from "react";
import { CartContext } from "../store/CartContextProvider";

const Item = (props) => {
  const cartCtx = useContext(CartContext)

  const onClickHandler = () => {
    cartCtx.addItem(props.data)
  };
  return (
    <div>
      <h3>{props.data.name}</h3>
      <p>{props.data.price}</p>
      <button onClick={onClickHandler}>Add Item</button>
    </div>
  );
};

export default Item;
