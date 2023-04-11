import styles from "../../../styles/filtersAndSort/priceFilter.module.css";

interface PriceFilterInputProps{
    handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    price:number;
    id:string;
}

const PriceFilterInput = ({handlePriceChange, price, id}:PriceFilterInputProps) => {
    
    
    return(
        <input
        onChange={(e) => handlePriceChange(e)}
        id={id}
        className={styles.input}
        value={price}
        type="text"
        min={0}
      ></input>
    )

}

export default PriceFilterInput;