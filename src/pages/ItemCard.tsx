import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IncreaseAndDecreaseItem from "../components/increaseAndDecreaseItem";
import styles from "../styles/itemCard.module.css";
import { Link } from "react-router-dom";
import ProductSize from "../components/productSize";
import cartIcon from "../assets/icons/cartWhite.svg";
import downloadIcon from "../assets/icons/downloadBlue.svg";
import shareIcon from "../assets/icons/share.svg";
import isBase64 from "../functions/isBase64";
import { Product } from "../App";

export interface Item {
  barcode: number;
  count: number;
  title: string;
  image: string;
}

const ItemCard = ({ setItemsInCart }: any) => {
  const { id } = useParams<{ id: string }>();

  const [descriptionIsOpen, setDescriptionIsOpen] = useState<boolean>(false);
  const [characteristicsIsOpen, setcharacteristicsIsOpen] =
    useState<boolean>(false);

  const [array, setArray] = useState<Item[]>(() => {
    if (typeof id === "undefined") {
      return [];
    }
    const items = localStorage.getItem("cart9090");
    return items && JSON.parse(items).find((e: Item) => e.barcode === +id)
      ? JSON.parse(items)
      : [];
  });

  const [item, setItem] = useState<any>(() => {
    const items = localStorage.getItem("items9090");
    return items ? JSON.parse(items) : [];
  });

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (id) {
      setItem([item?.find((e: Item) => e.barcode === +id)]);
    }

    if (id !== undefined) {
      const foundItem = array?.find((e: Item) => e.barcode === +id);
      if (foundItem) {
        setCount(foundItem.count);
      } else {
        setCount(0);
      }
    }

    setItemsInCart((old: Product[]) => {
      const newItems = array.filter((newItem) => {
        return !old.some(
          (oldItem: Product) => oldItem.barcode === newItem.barcode
        );
      });
      const updatedOldItems = old.map((oldItem: Product) => {
        const newItem = array.find(
          (newItem) => newItem.barcode === oldItem.barcode
        );
        if (newItem) {
          return { ...oldItem, count: newItem.count };
        } else {
          return { ...oldItem, count: oldItem.count };
        }
      });
      localStorage.setItem(
        "cart9090",
        JSON.stringify([...updatedOldItems, ...newItems])
      );
      return [...updatedOldItems, ...newItems];
    });
  }, [array]);

  const increaseCount = (barcode: number) => {
    if (count === 0) {
      setArray(item);
    }
    setArray((old: Item[]) =>
      old.map((e) => (e.barcode === barcode ? { ...e, count: e.count + 1 } : e))
    );
  };

  return (
    <section className={styles.card}>
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
        <Link className={styles.child} to="/catalog">
          Каталог
        </Link>
        <hr className={styles.child}></hr>
        <p className={styles.child}>{item.map((e: Product) => e.title)}</p>
      </div>

      {item.map((e: Product) => {
        return (
          <div className={styles.flex} key={e.barcode}>
            <div className={styles.image}>{isBase64(e.image)}</div>
            <div className={styles.column}>
              <p className={styles.green}>В наличии</p>
              <h2 className={styles.title}>{e?.title}</h2>

              <div className={styles.size}>
                <ProductSize sizeType={e.sizeType} size={e.size} />
              </div>

              <div className={styles.lineWidth}>
                <p className={styles.price}>
                  {e?.price} <span>&#8381;</span>
                </p>
                <div className={styles.mobileInc}>
                  <IncreaseAndDecreaseItem
                    barcode={e?.barcode}
                    count={array.length > 0 ? count : 0}
                    setArray={setArray}
                    item={item}
                  />
                </div>

                <button
                  onClick={() => increaseCount(e.barcode)}
                  className={`${styles.button} button-large`}
                >
                  <p>В корзину</p>
                  <img src={cartIcon} alt="иконка корзины"></img>
                </button>
              </div>

              <div className={styles.lineMobile}>
                <button
                  onClick={() => increaseCount(e.barcode)}
                  className={`${styles.buttonMobile} button-large`}
                >
                  <p>В корзину</p>
                  <img src={cartIcon} alt="иконка корзины"></img>
                </button>
                <button className={styles.shareButtonMobile} disabled>
                  <img src={shareIcon} alt="иконка поделиться"></img>
                </button>
              </div>

              <div className={styles.lineLarge}>
                <button className={styles.shareButton} disabled>
                  <img src={shareIcon} alt="иконка поделиться"></img>
                </button>

                <div className={styles.textBlock}>
                  <p className={styles.text}>
                    При покупке от <span> 10 000 &#8381;</span> бесплатная
                    доставка по Кокчетаву и области
                  </p>
                </div>

                <button className={styles.priceButton}>
                  <p>Прайс-лист</p>
                  <img src={downloadIcon} alt="иконка загрузки"></img>
                </button>
              </div>

              <div className={styles.aboutBlock}>
                <div className={styles.line}>
                  <p className={styles.key}>Производитель:</p>
                  <p className={styles.value}>{e?.producer}</p>
                </div>
                <div className={styles.line}>
                  <p className={styles.key}>Бренд:</p>
                  <p className={styles.value}>{e?.brand}</p>
                </div>
                <div className={styles.line}>
                  <p className={styles.key}>Артикул:</p>
                  <p className={styles.value}>13124251</p>
                </div>
                <div className={styles.line}>
                  <p className={styles.key}>Штрихкод:</p>
                  <p className={styles.value}>{e?.barcode}</p>
                </div>
              </div>

              <div className={styles.dropdown}>
                <button onClick={() => setDescriptionIsOpen((prev) => !prev)}>
                  Описание {descriptionIsOpen ? "▲" : "▼"}
                </button>
                {descriptionIsOpen ? (
                  <p className={styles.text}>{e.description}</p>
                ) : null}
              </div>

              <hr className={styles.hr}></hr>

              <div className={styles.dropdown}>
                <button
                  onClick={() => setcharacteristicsIsOpen((prev) => !prev)}
                >
                  Характеристики {descriptionIsOpen ? "▲" : "▼"}
                </button>
                {characteristicsIsOpen ? (
                  <ul className={styles.list}>
                    <li className={styles.line}>
                      <p className={styles.key}>Назначение:</p>
                      <p className={styles.value}>{e.title}</p>
                    </li>
                    <li className={styles.line}>
                      <p className={styles.key}>Тип:</p>
                      <p className={styles.value}>{e.title}</p>
                    </li>
                    <li className={styles.line}>
                      <p className={styles.key}>Производитель:</p>
                      <p className={styles.value}>{e.producer}</p>
                    </li>
                    <li className={styles.line}>
                      <p className={styles.key}>Бренд:</p>
                      <p className={styles.value}>{e.brand}</p>
                    </li>
                    <li className={styles.line}>
                      <p className={styles.key}>Артикул:</p>
                      <p className={styles.value}>{e.barcode}</p>
                    </li>
                    <li className={styles.line}>
                      <p className={styles.key}>Штрихкод:</p>
                      <p className={styles.value}>{e.barcode}</p>
                    </li>
                    <li className={styles.line}>
                      <p className={styles.key}>Вес:</p>
                      <p className={styles.value}>{e.size} г.</p>
                    </li>
                    <li className={styles.line}>
                      <p className={styles.key}>Объем:</p>
                      <p className={styles.value}>{e.size} г.</p>
                    </li>
                    <li className={styles.line}>
                      <p className={styles.key}>Кол-во в коробке:</p>
                      <p className={styles.value}>{e.size} г.</p>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ItemCard;
