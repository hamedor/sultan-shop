import addToCart from "../../functions/addToCart";
import styles from "../../styles/incAndDec.module.css";

interface incAndDecProps {
  barcode: number;
  count: number | number[];
  setItemsInCart: any;
  item?: any;
}

const IncreaseAndDecreaseItem = ({
  barcode,
  count,
  setItemsInCart,
  item,
}: incAndDecProps) => {

  const decreaseCount = (barcode: number) => {
    setItemsInCart((old: any) =>
      old.map((item: any) =>
          item.barcode === barcode ? { ...item, count: item.count - 1 } : item
        ).filter((item: any) => item.count > 0)
    );
  };

  
  return (
    <div className={styles.control}>
      <button className={styles.button} onClick={() => decreaseCount(barcode)}>
        -
      </button>
      <p className={styles.count}>{count}</p>
      <button className={styles.button} onClick={() => addToCart(item, setItemsInCart)}>
        +
      </button>
    </div>
  );
};

export default IncreaseAndDecreaseItem;
