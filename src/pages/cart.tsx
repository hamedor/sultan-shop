import { useState } from "react";
import IncreaseAndDecreaseItem from "../components/features/increaseAndDecreaseItem";
import ProductSize from "../components/item/itemSize";
import Modal from "../components/modalPage";
import styles from "../styles/cart.module.css";
import trash from "../assets/icons/delete.svg";
import { Link } from "react-router-dom";
import ItemImage from "../components/item/itemImage";
import { ItemInCart } from "../interfaces";
import ItemPrice from "../components/item/itemPrice";
import ItemDescription from "../components/item/itemDescription";
import Breadcrumbs from "../components/breadcrumbs";

import CartStore from '../stores/cartStore';

interface CartProps{
  price:number;
  itemsInCart: ItemInCart[];

}

const Cart = ({ price, itemsInCart}: CartProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  

  const deleteItem = (barcode: number) => {
    CartStore.deleteItem(barcode)
  };

  const handleModal = () => {
    setShowModal(true);
    localStorage.removeItem("cart9090");
    CartStore.setItemsInCart([]);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <div>
      <div className={styles.navMobile}>
        <div className={styles.circle}>
          <div className={styles.arrow}></div>
        </div>
        <p>НАЗАД</p>
      </div>
      <Breadcrumbs breadcrumbs ={[
            {label:'Главная', to: '/'},
            {label: 'Корзина', to: '/cart'}
          ]} />

      <h2 className={styles.titleLarge}>Корзина</h2>
      <hr className={styles.hr}></hr>
      {itemsInCart.length > 0 ? (
        itemsInCart.map((item: ItemInCart) => {
          return (
            
            <div key={item.barcode}>
              
              <div className={styles.item}>
                <ItemImage cart={true} item={item}/>
                <div className={styles.column}>
                  <ProductSize sizeType={item.sizeType} size={item.size} />
                  <p className={styles.title}><Link className={styles.title}  to={`/item/${item.barcode}`}>{item.title}</Link></p>
                 
                  
                  <ItemDescription cart={true} item={item}/>
                </div>

                <div className={styles.flex}>
                    <IncreaseAndDecreaseItem
                      barcode={item.barcode}
                      count={item.count}
                     
                      item={item}
                    />
                    <ItemPrice  item={item} styleLarge={true}/>
                    
                    <div className={styles.delete}>
                      <button
                        className={styles.button}
                        onClick={() => deleteItem(item.barcode)}
                      >
                        <img src={trash} alt="иконка мусорное ведро"></img>
                      </button>
                    </div>
                  
                </div>
              </div>
              <hr className={styles.hr}></hr>
            </div>
          );
        })
      ) : (
        <p>Корзина пуста!</p>
      )}

      {showModal && itemsInCart.length > 0 ? <Modal /> : null}
      <div className={styles.flexPrice}>
        <button
          onClick={handleModal}
          className={`${styles.buttonLarge} button-large`}
        >
          Оформить заказ
        </button>
        <p className={styles.price}>
          {price} <span>&#8381;</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
