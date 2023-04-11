import { ItemAndFormChildProps } from '../itemAndForm';
import styles from "../../styles/itemAndForm.module.css";

interface SizeInputProps extends ItemAndFormChildProps {
    size: number;
}

const SizeInput = ({setItem, size}:SizeInputProps) => {


    return(
        <>
        <p className={styles.key}>вес:</p>
        <input
          className={styles.inputGr}
          onChange={(e) => setItem(prev => ({...prev, size: +e.target.value}))}
          type="text"
          defaultValue={size}
          
        />
        </>
    )

}

export default SizeInput;