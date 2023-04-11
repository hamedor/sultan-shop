import { ItemAndFormChildProps } from '../itemAndForm';
import styles from "../../styles/itemAndForm.module.css";


interface TitleInputProps extends ItemAndFormChildProps {
    title: string;
}


const TitleInput = ({setItem, title}:TitleInputProps) => {


    return(
        <div className={styles.flexColumn}>
            <p className={styles.key}>Название:</p>
            <input
            className={styles.input}
            type="text"
            onChange={(e) => setItem(prev => ({...prev, title: e.target.value}))}
            defaultValue={title}
            />
        </div>  
    )
}


export default TitleInput;