import { Item } from '../../interfaces';
import styles from "../../styles/itemAndForm.module.css";
import cartIcon from "../../assets/icons/cartWhite.svg";

import CartStore from '../../stores/cartStore'

interface AddToCartButtonProps{
  item:Item;

}

const AddToCartButton = ({item}:AddToCartButtonProps) => {


    return(

        <button
        className={`${styles.button} button-large`}
        onClick={() => CartStore.addToCart(item)}
      >
        <p>В корзину</p>
        <img src={cartIcon} alt="иконка корзины"></img>
      </button>
    )
}

export default AddToCartButton;