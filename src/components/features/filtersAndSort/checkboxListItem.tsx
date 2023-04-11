import styles from "../../../styles/filtersAndSort/checkboxList.module.css";
import { CheckboxItem } from "./checkboxList";

interface CheckboxListItemProps{
    item: CheckboxItem;
    selectedCheckboxes: string[];
    setSelectedCheckboxes: (checkboxes: (old: string[]) => string[]) => void;
}

const CheckboxListItem = ({item,selectedCheckboxes, setSelectedCheckboxes}:CheckboxListItemProps) => {

    const handleChange = (name: string) => {
        if (!selectedCheckboxes.includes(name)) {
          setSelectedCheckboxes((old) => [...old, name]);
        } else {
          setSelectedCheckboxes((old) => old.filter((e: any) => e !== name));
        }
      };

    return(
        <>
          <input
            type="checkbox"
            id={item.name}
            value={item.name}
            onChange={() => handleChange(item.name)}
            ></input>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.count}>({item.count})</p>
        </>
    )
}

export default CheckboxListItem;