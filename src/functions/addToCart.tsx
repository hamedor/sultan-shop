import { Item } from "../interfaces";
import CartStore from '../stores/cartStore';


const addToCart = (item:Item,) => {
  CartStore.addToCart(item)
};

export default addToCart;