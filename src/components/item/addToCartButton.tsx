import { Item, ItemInCart } from '../../interfaces';
import { Dispatch, SetStateAction } from "react";
import addToCart from '../../functions/addToCart';
import toLocalstorage from '../../functions/toLocalStorage';

import styles from "../../styles/itemAndForm.module.css";
import cartIcon from "../../assets/icons/cartWhite.svg";

interface AddToCartButtonProps{
  item:Item;
  setItemsInCart?: Dispatch<SetStateAction<ItemInCart[]>>;
}

const AddToCartButton = ({item,setItemsInCart}:AddToCartButtonProps) => {


    return(

        <button
        className={`${styles.button} button-large`}
        onClick={() =>
          addToCart(item,setItemsInCart)
        }
      >
        <p>В корзину</p>
        <img src={cartIcon} alt="иконка корзины"></img>
      </button>
    )
}

export default AddToCartButton;