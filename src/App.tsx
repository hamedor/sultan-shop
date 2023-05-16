import { useState, useEffect} from "react";
import data from "./assets/data.json";

import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import ItemCard from "./pages/ItemCard";

import { Item } from "./interfaces";
import initializeItems from './functions/initializeItems';
import { HashRouter , Route, Routes } from "react-router-dom";
import initializeItemsInCart from "./functions/initializeItemsInCart";
import { Observer } from 'mobx-react-lite';

import cartStore from './stores/cartStore';


function App() {
  const [items, setItems] = useState<Item[]>(initializeItems());


  useEffect(() => {
     cartStore.setItemsInCart(initializeItemsInCart())
  }, [])

  return (
    <Observer>
    {() => (
    <div className="App">
      <HashRouter>
        <div className="wrapper">
          <Header price={cartStore.price} itemsCount={cartStore.itemsCount} />
          <Routes>
            <Route path="/" element={  <Catalog
                  data={data}
                  items={items}
                  setItems={setItems}
                />} />
            <Route
              path="/cart"
              element={<Cart price={cartStore.price} itemsInCart={cartStore.itemsInCart} />}
            />

            <Route
              path="/item/:id"
              element={
                <ItemCard
                  itemsInCart={cartStore.itemsInCart}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </HashRouter>

    </div>  
    )}
    </Observer>
  );
}

export default App;
