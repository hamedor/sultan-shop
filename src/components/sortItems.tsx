import { useEffect, useState } from "react";

import styles from "../styles/sort.module.css";

const SortItems = ({ items, setItems }: any) => {
  const [sortType, setSortType] = useState("titleUp");

  const handleSort = (e: any) => {
    setSortType(e.target.value);
  };

  useEffect(() => {
    const sorted = [...items].sort((a: any, b: any) => {
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
          return null;
      }
    });
    setItems(sorted);
  }, [sortType]);

  return (
    <div className={styles.sort}>
      <p className={styles.text}>Сортировка:</p>
      <select className={styles.select} onChange={handleSort}>
        <option value="titleUp">Название ▲</option>
        <option value="titleDown">Название ▼</option>
        <option value="priceUp">Цена ▲</option>
        <option value="priceDown">Цена ▼</option>
      </select>
    </div>
  );
};

export default SortItems;
