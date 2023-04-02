import { useEffect, useState } from "react";
import styles from "../styles/priceFilter.module.css";

interface PriceFilterProps {
  minPrice: number;
  setMinPrice: (value: number) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
}

const PriceFilter = ({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}: PriceFilterProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "");
    e.target.id === "min" ? setMinPrice(+newValue) : setMaxPrice(+newValue);
  };

  return (
    <>
      <p className={styles.text}>
        Цена <span>&#8381;</span>
      </p>
      <div className={styles.flex}>
        <input
          onChange={(e) => handleChange(e)}
          id="min"
          className={styles.input}
          value={minPrice}
          type="text"
          min={0}
        ></input>
        <span> - </span>
        <input
          onChange={(e) => handleChange(e)}
          id="max"
          className={styles.input}
          value={maxPrice}
          type="text"
          max={10000}
        ></input>
      </div>
    </>
  );
};

export default PriceFilter;
