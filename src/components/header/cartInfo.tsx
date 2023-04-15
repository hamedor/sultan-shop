import { Link } from "react-router-dom";
import styles from "../../styles/header.module.css";
import cart from "../../assets/icons/cart.svg";

interface CartInfoProps{
  itemsCount:number;
  price?:number;
}

const CartInfo = ({ itemsCount, price }:CartInfoProps) => {
    return (
      <div className={styles.cart}>
        <div className={styles.cartImage}>
          <Link className={styles.cartImg} to="/cart">
            <img src={cart} alt="иконка корзины"></img>
          </Link>
  
          <div className={styles.circleOuter}>
            <div className={styles.circle}>
              <p className={styles.count}>{itemsCount}</p>
            </div>
          </div>
        </div>

  
           <div className={styles.cartPrice}>
           <p className={styles.contactText}>Корзина</p>
           <p className={styles.price}>
             {price} <span>&#8381;</span>
           </p>
         </div>
     
     
      </div>
    );
  };

  export default CartInfo;