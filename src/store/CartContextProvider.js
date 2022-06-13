import React from "react";

export const CartContext = React.createContext({
  items: [],
  addItem: () => {},
  deleteItem: () => {}
});

const CartContextProvider = (props) => {
  const [items, setItems] = React.useState([]);

  const addItemHandler = (item) => {
    const existingItemIndex = items.findIndex((i)  => i.id === item.id)
    const existingItem = items[existingItemIndex]
    const updatedItems = items.filter((elem) => elem.id === item.id)
    if (existingItem) {
      existingItem.count +=1
      updatedItems.push(existingItem)
    }
    else {
      updatedItems.push(item)
    }
    setItems(updatedItems)
  };

  const deleteItemHandler = (id) => {
    const existingItemIndex = items.findIndex((i) => i.id === id);
    const existingItem = items[existingItemIndex];
    const updatedItems = items.filter((elem) => elem.id === id);
    if (existingItem) {
      existingItem.count -= 1;
      updatedItems.push(existingItem);
    }
    setItems(updatedItems);
  };

  const value = {
    items: items,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};


export default CartContextProvider;
