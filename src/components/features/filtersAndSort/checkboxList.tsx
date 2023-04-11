import styles from "../../../styles/filtersAndSort/checkboxList.module.css";
import { useEffect, useState } from "react";

import CheckBoxListSearch from "./checkboxListSearch";
import CheckboxListItem from "./checkboxListItem";
import CheckboxListShowButton from "./checkboxListShowButton";

export interface CheckboxItem {
  name: string;
  count: number;
}

interface CheckboxListProps {
  items: { name: string; count: number }[];
  selectedCheckboxes: string[];
  setSelectedCheckboxes: (checkboxes: (old: string[]) => string[]) => void;
  title: string;
}

const CheckboxList = ({
  items,
  selectedCheckboxes,
  setSelectedCheckboxes,
  title,
}: CheckboxListProps) => {
  
  const [showAllOpened, setShowAllOpened] = useState<boolean>(false);
  const [pagination, setPagination] = useState<number>(4);
  const [buttonText, setButtonText] = useState<string>("Показать все");
  const [checkboxItemsSearched, setCheckboxItemsSearched] = useState<{ name: string; count: number }[]>();

  useEffect(() => {
    const sorted = items?.sort((a: CheckboxItem, b: CheckboxItem) =>
      a.count < b.count ? 1 : -1
    );
    setCheckboxItemsSearched(sorted);
  }, [items]);


  useEffect(() => {
    setPagination(() => (showAllOpened ? items.length : 4));
    showAllOpened ? setButtonText("Скрыть ▲") : setButtonText("Показать все ▼");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAllOpened]);



  return (
    <div className={styles.controls}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.inputWrapper}>
        <CheckBoxListSearch items={items} setCheckboxItemsSearched={setCheckboxItemsSearched}/>
      </div>

      {checkboxItemsSearched?.slice(0, pagination).map((item: CheckboxItem) => {
        return (
          <div className={styles.flex} key={item.name}>
            <CheckboxListItem item={item} selectedCheckboxes={selectedCheckboxes} setSelectedCheckboxes={setSelectedCheckboxes}/>
          </div>
        );
      })}
      <div>
        <CheckboxListShowButton setShowAllOpened={setShowAllOpened} buttonText={buttonText}/>
      </div>
    </div>
  );
};

export default CheckboxList;
