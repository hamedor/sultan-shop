import { Item } from '../../interfaces';
import styles from "../../styles/itemAndForm.module.css";

interface ItemPriceProps{
    item:Item;
    styleLarge?: boolean;
}

const ItemPrice = ({item, styleLarge}:ItemPriceProps) => {

    return(
        <p className={styleLarge ? styles.priceLarge : styles.price}>
            {item.price} <span>&#8381;</span>
        </p>
    )
}

export default ItemPrice;