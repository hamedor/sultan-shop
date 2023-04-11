import { ItemAndFormChildProps } from '../itemAndForm';
import styles from "../../styles/itemAndForm.module.css";

interface BrandInputProps extends ItemAndFormChildProps {
    brand: string;
}

const BrandInput = ({setItem, brand}:BrandInputProps) => {


    return(
        <div className={styles.flexColumn}>
            <p className={styles.key}>Бренд:</p>
            <input
            className={styles.input}
            onChange={(e) => setItem(prev => ({...prev, brand: e.target.value}))}
            type="text"
            defaultValue={brand}
            />
        </div>
    )
}

export default BrandInput;