import { ItemAndFormChildProps } from '../itemAndForm';
import styles from "../../styles/itemAndForm.module.css";

interface ProducerInputProps extends ItemAndFormChildProps {
    producer: string;
}

const ProducerInput = ({setItem, producer}:ProducerInputProps) => {

    return(
        <div className={styles.flexColumn}>
           <p className={styles.key}>Производитель:</p>
            <input
            className={styles.input}
            onChange={(e) => setItem(prev => ({...prev, producer: e.target.value}))}
            type="text"
            defaultValue={producer}
            />
        </div>
    )
}

export default ProducerInput;