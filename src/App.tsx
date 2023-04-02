import { useState, useEffect } from "react";
import data from "./assets/data.json";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import ItemCard from "./pages/ItemCard";
import Main from "./pages/main";

import { Product as importedProduct } from "./interfaces";
import initiazieItemsWithCount from "./functions/initializeItemsWithCount";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

export interface Product extends importedProduct {
  count: number;
}
interface Item {
  count: number;
  price: number;
}

function App() {
  const [items, setItems] = useState<Product[]>([]);

  const [itemsInCart, setItemsInCart] = useState<Product[]>(() => {
    const items = localStorage.getItem("cart");
    return items ? JSON.parse(items) : [];
  });

  const [itemsCount, setItemsCount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    setItems(initiazieItemsWithCount(data));
  }, []);

  useEffect(() => {
    const itemsCount = itemsInCart.reduce((acc: number, curr: Product) => {
      return acc + curr.count;
    }, 0);
    setItemsCount(itemsCount);

    const price = itemsInCart.reduce((acc: number, curr: Item) => {
      return acc + curr.count * curr.price;
    }, 0);
    setPrice(price);
  }, [itemsInCart]);

  return (
    <div className="App">
      <Router>
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
                  itemsInCart={itemsInCart}
                  setItemsInCart={setItemsInCart}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart setItemsInCart={setItemsInCart} />}
            />

            <Route
              path="/item/:id"
              element={
                <ItemCard
                  items={items}
                  setItemsInCart={setItemsInCart}
                  itemsInCart={itemsInCart}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
