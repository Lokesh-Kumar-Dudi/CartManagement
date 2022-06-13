import logo from './logo.svg';
import './App.css';
import CartContextProvider, { CartContext } from './store/CartContextProvider';
import ItemMenu from './components/ItemMenu';
import { useContext } from 'react';

const DUMMYDATA = [
  {
    id: 1,
    name: "Item1",
    price: 10,
    count: 0,
  },
  {
    id: 2,
    name: "Item2",
    price: 20,
    count: 0,
  },
  {
    id: 3,
    name: "Item3",
    price: 30,
    count: 0,
  },
  {
    id: 4,
    name: "Item4",
    price: 40,
    count: 0,
  },
];

function App() {
  const cartCtx = useContext(CartContext)
  return (
    <div className="App">
      <CartContextProvider >
        <ItemMenu items={DUMMYDATA}></ItemMenu>
        <h1>Cart Items</h1>
        <ItemMenu items={cartCtx.items}></ItemMenu>
      </CartContextProvider>
    </div>
  );
}

export default App;
