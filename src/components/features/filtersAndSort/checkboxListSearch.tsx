import {  useState } from "react";
import { CheckboxItem } from "./checkboxList";
import searchIcon from "../../../assets/icons/search.png";
import styles from "../../../styles/filtersAndSort/checkboxList.module.css";

interface CheckBoxListSearchProps{
    items:CheckboxItem[];
    setCheckboxItemsSearched:(items: { name: string; count: number }[]) => void;

}

const CheckBoxListSearch = ({items, setCheckboxItemsSearched}:CheckBoxListSearchProps) => {


const [searchValue, setSearchValue] = useState<string>("");


  const searchCheckboxes = () => {
    let arr: { name: string; count: number }[] = [];
    items?.forEach((e: CheckboxItem) => {
      if (e.name.toLowerCase().startsWith(searchValue.toLowerCase())) {
        arr.push({ name: e.name, count: e.count });
      }
    });
    setCheckboxItemsSearched(arr);
  };


    return(
        <>
            <input
            className={`${styles.input} input-large`}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Поиск..."
            ></input>
            <button
            onClick={searchCheckboxes}
            className={styles.insideButton}
            >
            <img src={searchIcon} alt="иконка поиска"></img>
            </button>
        </>
    )
}

export default CheckBoxListSearch;