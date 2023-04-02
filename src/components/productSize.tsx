import styles from "../styles/productSize.module.css";
import bottle from "../assets/icons/bottle.svg";
import box from "../assets/icons/box.svg";

interface productSizeProps {
  sizeType: string;
  size: number;
}

const ProductSize = ({ sizeType, size }: productSizeProps) => {
  return (
    <div className={styles.flex}>
      {sizeType === "объем" ? (
        <>
          <img src={bottle} width={14} height={14} alt="картинка бутылки"></img>
          <p className={styles.size}>{size} мл</p>
        </>
      ) : (
        <>
          <img src={box} width={14} height={14} alt="картинка коробка"></img>
          <p className={styles.size}>{size} гр</p>
        </>
      )}
    </div>
  );
};

export default ProductSize;
