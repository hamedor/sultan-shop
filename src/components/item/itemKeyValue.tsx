import { Item } from '../../interfaces';

import styles from "../../styles/itemAndForm.module.css";

interface ItemKeyValueProps {
    item: Item;
    label: string;
    value: keyof Item;
  }


const ItemKeyValue = ({item, label, value}:ItemKeyValueProps) => {

    return(
        <div className={styles.flex}>
            <p className={styles.key}>{label}:</p>
            <p className={styles.value}>{item[value]}</p>
        </div>
    )
}

export default ItemKeyValue;