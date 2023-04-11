import {ItemAndFormChildProps} from '../itemAndForm';
import styles from "../../styles/itemAndForm.module.css";

interface SizeTypeSelectProps extends ItemAndFormChildProps {
    sizeType: string;
}

const SizeTypeSelect = ({setItem, sizeType}:SizeTypeSelectProps) => {


    return(
        <select
        className={styles.selectGr}
        value={sizeType}
        onChange={(e) => setItem(prev => ({...prev, sizeType: e.target.value}))}
      >
        <option value="вес">вес</option>
        <option value="объем">объем</option>
      </select>
    )
}


export default SizeTypeSelect;