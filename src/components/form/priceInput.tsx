import { ItemAndFormChildProps } from '../itemAndForm';
import styles from "../../styles/itemAndForm.module.css";

interface PriceInputProps extends ItemAndFormChildProps {
    price: number;
}

const PriceInput = ({setItem, price}:PriceInputProps) => {

    return(
        <div className={styles.flexColumn}>
            <p className={styles.key}>Цена:</p>
            <input
                className={styles.input}
                onChange={(e) => setItem(prev => ({...prev, price: +e.target.value}))}
                type="number"
                defaultValue={price}
            />
          </div>
    )
}

export default PriceInput;
