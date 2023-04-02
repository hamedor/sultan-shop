import styles from "../styles/incAndDec.module.css";

interface incAndDecProps {
  barcode: number;
  count: number | number[];
  setArray: any;
  item?: any;
}

const IncreaseAndDecreaseItem = ({
  barcode,
  count,
  setArray,
  item,
}: incAndDecProps) => {
  const decreaseCount = (barcode: number) => {
    setArray((old: any) =>
      old
        .map((item: any) =>
          item.barcode === barcode ? { ...item, count: item.count - 1 } : item
        )
        .filter((item: any) => item.count > 0)
    );
  };
  const increaseCount = (barcode: number) => {
    if (count === 0) {
      setArray(item);
    }
    setArray((old: any) =>
      old.map((e: any) =>
        e.barcode === barcode ? { ...e, count: e.count + 1 } : e
      )
    );
  };

  return (
    <div className={styles.control}>
      <button className={styles.button} onClick={() => decreaseCount(barcode)}>
        -
      </button>
      <p className={styles.count}>{count}</p>
      <button className={styles.button} onClick={() => increaseCount(barcode)}>
        +
      </button>
    </div>
  );
};

export default IncreaseAndDecreaseItem;
