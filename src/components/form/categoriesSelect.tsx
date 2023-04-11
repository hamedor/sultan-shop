import { useState } from 'react';
import { ItemAndFormChildProps } from '../itemAndForm';
import { Item } from '../../interfaces';

import styles from "../../styles/itemAndForm.module.css";

interface CategoriesSelectProps extends ItemAndFormChildProps {
  categories: string[];
  item: Item
}

const CategoriesSelect = ({item, setItem, categories}:CategoriesSelectProps) => {
    const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false);

    const handleCategoryChange = (
        event: React.ChangeEvent<HTMLSelectElement>
      ) => {

       setItem(prev => ({...prev, category:Array.from(event.target.selectedOptions, (option) => option.value)}))

      };

    return(
      <div className={styles.flex}>
        <select
        className={styles.selectMulti}
        multiple
        onClick={() => setSelectIsOpen(true)}
        size={selectIsOpen ? categories.length : 3}
        value={item.category}
        onChange={handleCategoryChange}
      >
        {categories.map((c: string) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
  
        </div>

    )
}

export default CategoriesSelect;