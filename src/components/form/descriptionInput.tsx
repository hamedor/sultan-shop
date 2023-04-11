import { ItemAndFormChildProps } from '../itemAndForm';
import styles from "../../styles/itemAndForm.module.css";


interface SizedInputProps extends ItemAndFormChildProps {
    description: string;
}


const DescriptionInput = ({setItem, description}:SizedInputProps ) => {

    return(
        <div className={styles.flexColumn}>
            <p className={styles.key}>Описание:</p>
            <input
            className={styles.input}
            onChange={(e) => setItem(prev => ({...prev, description: e.target.value}))}
            type="text"
            defaultValue={description}
            />
        </div>
    )
}

export default DescriptionInput;