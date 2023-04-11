import { useEffect, useState } from 'react';
import { Item } from '../../../interfaces';
import styles from "../../../styles/sort.module.css";


interface SortProps{
  items:Item[];
  setSortedItems:  (sortedItems: Item[]) => void;
}

const Sort = ({items,setSortedItems}:SortProps) => {


    const [sortType, setSortType] = useState('titleUp'); 

    const handleSort = (e: any) => {
        setSortType(e.target.value);
      };
      
      useEffect(() => {
        const sorted =  [...items].sort((a: any, b: any) => {
    
          switch (sortType) {
            case "titleUp":
              return a.title.localeCompare(b.title);
            case "titleDown":
              return b.title.localeCompare(a.title);
            case "priceUp":
              return a.price - b.price;
            case "priceDown":
              return b.price - a.price;
            default:
              return a.title.localeCompare(b.title);
          }
        });
    
        setSortedItems(sorted);
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[sortType, items]); 

    return(
        <div className={styles.sort}>
        <p className={styles.text}>Сортировка:</p>
        <select className={styles.select} onChange={handleSort}>
          <option value="titleUp">Название ▲</option>
          <option value="titleDown">Название ▼</option>
          <option value="priceUp">Цена ▲</option>
          <option value="priceDown">Цена ▼</option>
        </select>
      </div>
    )
}
export default Sort;