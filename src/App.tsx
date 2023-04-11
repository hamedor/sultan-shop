import { useState,} from "react";
import data from "./assets/data.json";

import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer";

import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import ItemCard from "./pages/ItemCard";
import Main from "./pages/main";

import { Item } from "./interfaces";
import initializeItems from './functions/initializeItems';
import { HashRouter , Route, Routes } from "react-router-dom";
import initializeItemsInCart from "./functions/initializeItemsInCart";


import  useCart  from "./hooks/useCart";


function App() {


  const [items, setItems] = useState<Item[]>(initializeItems());

  const { itemsInCart, setItemsInCart, itemsCount, price } = useCart(initializeItemsInCart());




  return (
    <div className="App">
      <HashRouter>
        <div className="wrapper">
          <Header price={price} itemsCount={itemsCount} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/catalog"
              element={
                <Catalog
                  data={data}
                  items={items}
                  setItems={setItems}
                  setItemsInCart={setItemsInCart}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart price={price} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />}
            />

            <Route
              path="/item/:id"
              element={
                <ItemCard
                  setItemsInCart={setItemsInCart}
                  itemsInCart={itemsInCart}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
