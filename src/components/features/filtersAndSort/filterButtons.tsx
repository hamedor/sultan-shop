import { Dispatch, SetStateAction } from "react";
import initializeItems from '../../../functions/initializeItems';

import styles from '../../../styles/filtersAndSort/filterButtons.module.css';
import trash from "../../../assets/icons/delete.svg";


import { Item } from '../../../interfaces'; 

interface FilterButtonsProps{
    handleFilters: Item[];
    setItems: Dispatch<SetStateAction<Item[]>>;
    setSelectedProductCheckBoxes: (selected: string[]) => void;
    setSelectedBrandCheckBoxes: (selected: string[]) => void;
    setMinPrice: (minPrice: number) => void;
    setMaxPrice: (maxPrice: number) => void;
}



const FilterButtons = ({handleFilters,setItems,setSelectedProductCheckBoxes,setSelectedBrandCheckBoxes,setMinPrice,setMaxPrice}:FilterButtonsProps) => {


    const applyFilters = () => {
        setItems(handleFilters);
    };
    const deleteFilters = () => {
        const items = initializeItems();
    
        (document.querySelectorAll('input[type=checkbox]') as NodeListOf<HTMLInputElement>).forEach((el) => {
            el.checked = false;
        });
    
        setSelectedProductCheckBoxes([]);
        setSelectedBrandCheckBoxes([]);
        setMinPrice(0);
        setMaxPrice(10000);
        setItems(items);
    
    };


    return(
        <>
        <button
            onClick={applyFilters}
            className={`${styles.buttonlarge} button-large`}>
            Показать
        </button>
        <button onClick={deleteFilters} className={styles.button}>
            <img src={trash} alt="иконка мусорное ведро"></img>
        </button>
      </>
    )
}


export default FilterButtons;