import { useState, useEffect } from 'react';
import  toLocalstorage  from '../functions/toLocalStorage';

import { ItemInCart } from '../interfaces';

const  useCart = (initialItemsInCart: ItemInCart[]) => {

  const [itemsInCart, setItemsInCart] = useState<ItemInCart[]>(initialItemsInCart);
  const [itemsCount, setItemsCount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const itemsCount = itemsInCart?.reduce((acc: number, curr: ItemInCart) => {
      return acc + curr.count;
    }, 0);
    setItemsCount(itemsCount);

    const price = itemsInCart?.reduce((acc: number, curr: ItemInCart) => {
      return acc + curr.count * curr.price;
    }, 0);
    setPrice(price);

    toLocalstorage('cart9090', itemsInCart);
  }, [itemsInCart]);

  return { itemsInCart, setItemsInCart, itemsCount, price };
}

export default useCart;