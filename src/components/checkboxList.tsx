import styles from "../styles/checkboxList.module.css";
import { useEffect, useState } from "react";

import searchIcon from "../assets/icons/search.png";

interface Item {
  name: string;
  count: number;
}

interface CheckboxListProps {
  items: { name: string; count: number }[];
  selectedCheckBoxes: string[];
  setSelectedCheckBoxes: (checkboxes: (old: string[]) => string[]) => void;
  title: string;
}

const CheckboxList = ({
  items,
  selectedCheckBoxes,
  setSelectedCheckBoxes,
  title,
}: CheckboxListProps) => {
  const [showAllOpened, setShowAllOpened] = useState<boolean>(false);
  const [pagination, setPagination] = useState<number>(4);
  const [buttonText, setButtonText] = useState<string>("Показать все");

  const [checkboxItemsHandler, setCheckboxItemsHandler] =
    useState<{ name: string; count: number }[]>();
  const [checkboxItems, setCheckboxItems] =
    useState<{ name: string; count: number }[]>();

  useEffect(() => {
    const sorted = items?.sort((a: Item, b: Item) =>
      a.count < b.count ? 1 : -1
    );
    setCheckboxItems(sorted);
  }, [items]);

  useEffect(() => {
    showAllOpened ? setPagination(items.length) : setPagination(4);
    showAllOpened ? setButtonText("Скрыть ▲") : setButtonText("Показать все ▼");
  }, [showAllOpened]);

  const handleChange = (name: string) => {
    if (!selectedCheckBoxes.includes(name)) {
      setSelectedCheckBoxes((old) => [...old, name]);
    } else {
      setSelectedCheckBoxes((old) => old.filter((e: any) => e !== name));
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    if (value) {
      let arr: { name: string; count: number }[] = [];
      checkboxItems?.forEach((e: Item) => {
        if (e.name.toLowerCase().startsWith(value.toLowerCase())) {
          arr.push({ name: e.name, count: e.count });
          setCheckboxItemsHandler(arr);
        }
      });
    } else {
      setCheckboxItemsHandler(items);
    }
  };

  return (
    <div className={styles.controls}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input} input-large`}
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Поиск..."
        ></input>
        <button
          onClick={() => setCheckboxItems(checkboxItemsHandler)}
          className={styles.insideButton}
        >
          <img src={searchIcon} alt="иконка поиска"></img>
        </button>
      </div>

      {checkboxItems?.slice(0, pagination).map((e: Item) => {
        return (
          <div className={styles.flex} key={e.name}>
            <input
              type="checkbox"
              id={e.name}
              value={e.name}
              onChange={() => handleChange(e.name)}
            ></input>
            <p className={styles.name}>{e.name}</p>
            <p className={styles.count}>({e.count})</p>
          </div>
        );
      })}
      <div>
        <button
          className={styles.smallButton}
          onClick={() => setShowAllOpened((prev) => !prev)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CheckboxList;
