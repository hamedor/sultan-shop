import addToCart from "../../functions/addToCart";
import styles from "../../styles/incAndDec.module.css";

import CartStore from '../../stores/cartStore';

interface incAndDecProps {
  barcode: number;
  count: number | number[];
  item?: any;
}

const IncreaseAndDecreaseItem = ({
  barcode,
  count,
  
  item,
}: incAndDecProps) => {

  const decreaseCount = (barcode: number) => {
    CartStore.decreaseCount(barcode)
  };

  
  return (
    <div className={styles.control}>
      <button className={styles.button} onClick={() => decreaseCount(barcode)}>
        -
      </button>
      <p className={styles.count}>{count}</p>
      <button className={styles.button} onClick={() => addToCart(item)}>
        +
      </button>
    </div>
  );
};

export default IncreaseAndDecreaseItem;
