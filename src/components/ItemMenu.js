import { React } from "react";
import Item from "./item";

const ItemMenu = (props) => {
  return (
    <div>
      {props.items.map((elem) => (
        <Item data={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ItemMenu;
