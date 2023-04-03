import { useState, useEffect } from "react";
import IncreaseAndDecreaseItem from "../components/increaseAndDecreaseItem";
import ProductSize from "../components/productSize";
import Modal from "../components/modalPage";
import styles from "../styles/cart.module.css";
import trash from "../assets/icons/delete.svg";
import { Link } from "react-router-dom";
import isBase64 from "../functions/isBase64";

interface Item {
  price: number;
  count: number;
}

const Cart = ({ setItemsInCart }: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [array, setArray] = useState<any>(() => {
    const items = localStorage.getItem("cart9090");
    return items ? JSON.parse(items) : [];
  });

  const deleteItem = (barcode: number) => {
    setArray((old: any) => {
      return old.filter((e: any) => e.barcode !== barcode);
    });
  };

  useEffect(() => {
    setItemsInCart(array);

    const totalPrice = array.reduce((total: number, item: Item) => {
      return total + item.price * item.count;
    }, 0);

    setTotalPrice(totalPrice);

    localStorage.setItem("cart9090", JSON.stringify(array));
  }, [array]);

  const handleModal = () => {
    setShowModal(true);
    localStorage.removeItem("cart9090");
    setArray([]);
    setItemsInCart([]);
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
      <div className={styles.breadcrumbs}>
        <Link className={styles.child} to="/">
          Главная
        </Link>
        <hr className={styles.child}></hr>
        <Link className={styles.child} to="/cart">
          Корзина
        </Link>
      </div>

      <h2 className={styles.titleLarge}>Корзина</h2>

      {array.length > 0 ? (
        array.map((e: any) => {
          return (
            <div key={e.barcode}>
              <div className={styles.item}>
                <div className={styles.image}>{isBase64(e.image)}</div>
                <div className={styles.column}>
                  <ProductSize sizeType={e.sizeType} size={e.size} />
                  <p className={styles.title}>{e.title}</p>
                  <p className={styles.description}>{e.description}</p>
                </div>

                <div className={styles.flex}>
                  <IncreaseAndDecreaseItem
                    /* allowzero={true} */ barcode={e.barcode}
                    count={e.count}
                    setArray={setArray}
                  />

                  <p className={styles.price}>
                    {e.price} <span>&#8381;</span>
                  </p>
                  <div className={styles.delete}>
                    <button
                      className={styles.button}
                      onClick={() => deleteItem(e.barcode)}
                    >
                      <img src={trash} alt="иконка мусорное ведро"></img>
                    </button>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
          );
        })
      ) : (
        <p>Корзина пуста!</p>
      )}

      {showModal && array.length > 0 ? <Modal /> : null}
      <div className={styles.flexPrice}>
        <button
          onClick={handleModal}
          className={`${styles.buttonLarge} button-large`}
        >
          Оформить заказ
        </button>
        <p className={styles.price}>
          {totalPrice} <span>&#8381;</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
