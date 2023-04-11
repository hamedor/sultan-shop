import { Item } from '../../interfaces';
import { Link } from 'react-router-dom';
import styles from "../../styles/itemAndForm.module.css";


interface ItemTitleProps{
    item:Item
}

const ItemTitle = ({item}:ItemTitleProps) => {

    return(
        <p className={styles.title}>
            <Link to={`/item/${item.barcode}`}>{item.title}</Link>
        </p>
    )
}

export default ItemTitle;