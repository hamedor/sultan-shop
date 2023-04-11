import isBase64 from "../../functions/isBase64";
import { Item } from "../../interfaces";
import styles from "../../styles/itemAndForm.module.css";


interface ItemImageProps{
    cart?:boolean;
    item:Item;
    isItemEdit?:boolean;
    isItemCard?:true;
}

const ItemImage = ({item, isItemEdit, cart, isItemCard}:ItemImageProps) => {

    return(
       
        <div className={isItemCard ? styles.itemCardImage : cart ? styles.cartImage : styles.image} style={{display: isItemEdit ? 'none' : 'block'}}>
        {isBase64(item.image)}
    </div>
    )
}

export default ItemImage;