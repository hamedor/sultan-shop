import { useState} from "react";
import { useParams } from "react-router-dom";

import IncreaseAndDecreaseItem from "../components/features/increaseAndDecreaseItem";
import styles from "../styles/itemCard.module.css";
import ProductSize from "../components/item/itemSize";
import initializeItems from "../functions/initializeItems";
import cartIcon from "../assets/icons/cartWhite.svg";
import downloadIcon from "../assets/icons/downloadBlue.svg";
import shareIcon from "../assets/icons/share.svg";

import { Item, ItemInCart } from "../interfaces";
import ItemImage from "../components/item/itemImage";
import ItemKeyValue from "../components/item/itemKeyValue";
import Breadcrumbs from "../components/breadcrumbs";

import CartStore from '../stores/cartStore'

interface itemCardProps {
  itemsInCart:ItemInCart[]
}

const ItemCard = ({ itemsInCart }: itemCardProps) => {
  const { id } = useParams<{ id: string }>();

  const [descriptionIsOpen, setDescriptionIsOpen] = useState<boolean>(false);
  const [characteristicsIsOpen, setcharacteristicsIsOpen] = useState<boolean>(false);


  const [items] = useState<Item[]>(() => {
    const initialItems: Item[] = initializeItems();
    if (id) {
      return initialItems.filter((e) => e.barcode === +id);
    }
    return initialItems;
  });

  const getCount = (barcode:number) => {
    const item = itemsInCart.find(e => e.barcode === barcode);
    return item ? item.count : 0;
  }
  

  return (
    <section className={styles.card}>
      <div className={styles.navMobile}>
        <div className={styles.circle}>
          <div className={styles.arrow}></div>
        </div>
        <p>НАЗАД</p>
      </div>



      {items.map((item: Item) => {
        return (
          <div key={item.barcode}>
          <Breadcrumbs breadcrumbs ={[
            {label:'Главная', to: '/'},
          ]} item={item}/>
          <div className={styles.flex} key={item.barcode}>
              <ItemImage isItemCard={true} item={item}/>
              <div className={styles.column}>
                <p className={styles.green}>В наличии</p>
                <h2 className={styles.title}>{item.title}</h2>

                <div className={styles.size}>
                  <ProductSize sizeType={item.sizeType} size={item.size} />
                </div>

                <div className={styles.lineWidth}>
                  <p className={styles.price}>
                    {item.price} <span>&#8381;</span>
                  </p>
                  <div className={styles.mobileInc}>
                    
                  <IncreaseAndDecreaseItem
                      barcode={item.barcode}
                      count={getCount(item.barcode)}
    
                      item={item}
                    /> 
                  </div>

                 <button
                    onClick={() => CartStore.addToCart(item)}
                    className={`${styles.button} button-large`}
                  >
                    <p>В корзину</p>
                    <img src={cartIcon} alt="иконка корзины"></img>
                  </button>
                </div>

                <div className={styles.lineMobile}>
                  <button
                    onClick={() => CartStore.addToCart(item)}
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
                    <ItemKeyValue item={item} label={'Производитель'} value={'producer'} />
                  </div>
                  <div className={styles.line}>
                    <ItemKeyValue item={item} label={'Брэнд'} value={'brand'} />
                  </div>
                  <div className={styles.line}>
                    <ItemKeyValue item={item} label={'Артикул'} value={'barcode'} />
                  </div>
                  <div className={styles.line}>
                    <ItemKeyValue item={item} label={'Штрихкод'} value={'barcode'} />
                  </div>
                </div>

                <div className={styles.dropdown}>
                  <button onClick={() => setDescriptionIsOpen((prev) => !prev)}>
                    Описание {descriptionIsOpen ? "▲" : "▼"}
                  </button>
                  {descriptionIsOpen ? (
                    <p className={styles.text}>{item.description}</p>
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
                        <ItemKeyValue item={item} label={'Назначение'} value={'title'} />
                      </li>
                      <li className={styles.line}>
                        <ItemKeyValue item={item} label={'Тип'} value={'title'} />
                      </li>
                      <li className={styles.line}>
                        <ItemKeyValue item={item} label={'Производитель'} value={'producer'} />
                      </li>
                      <li className={styles.line}>
                        <ItemKeyValue item={item} label={'Бренд'} value={'brand'} />
                      </li>
                      <li className={styles.line}>
                        <ItemKeyValue item={item} label={'Артикул'} value={'barcode'} />
                      </li>
                      <li className={styles.line}>
                        <ItemKeyValue item={item} label={'Штрихкод'} value={'barcode'} />
                      </li>
                      <li className={styles.line}>
                        <ItemKeyValue item={item} label={'Вес'} value={'size'} />
                      </li>
                      <li className={styles.line}>
                        <ItemKeyValue item={item} label={'Объем'} value={'size'} />
                      </li>
                      <li className={styles.line}>
                        <ItemKeyValue item={item} label={'Кол-во в коробке'} value={'size'} />
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          );
      })}
    </section>
  );
};

export default ItemCard;
