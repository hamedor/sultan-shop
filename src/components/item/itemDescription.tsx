import { Item } from '../../interfaces';
import styles from "../../styles/itemAndForm.module.css";

interface ItemDescriptionProps{
    item:Item;
    cart?:boolean;
}

const ItemDescription = ({item, cart}:ItemDescriptionProps) => {

    return(
        <p className={cart ? styles.cartDescription : styles.description}>{item.description}</p>
    )
}

export default ItemDescription;