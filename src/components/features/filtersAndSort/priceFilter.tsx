import styles from "../../../styles/filtersAndSort/priceFilter.module.css";
import PriceFilterInput from "./priceFilterInput";

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

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "");
    e.target.id === "min" ? setMinPrice(+newValue) : setMaxPrice(+newValue);
  };

  return (
    <>
      <p className={styles.text}>
        Цена <span>&#8381;</span>
      </p>
      <div className={styles.flex}>
        <PriceFilterInput handlePriceChange={handlePriceChange} price={minPrice} id={'min'}/>
        <span>-</span>
        <PriceFilterInput handlePriceChange={handlePriceChange} price={maxPrice} id={'max'}/>
      </div>
 
    </>
  );
};

export default PriceFilter;
