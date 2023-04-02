import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/productItem.module.css";
import cartIcon from "../assets/icons/cartWhite.svg";
import isBase64 from "../functions/isBase64";

interface ProducItemProps {
  barcode: number;
  brand: string;
  category: string[];
  description: string;
  image: string;
  price: number;
  producer: string;
  size: number;
  sizeType: string;
  title: string;
  addToCart: any;
  adminMode: boolean;
  deleteItem: any;
  categories: string[];
  saveItem: any;
  triggerChange: number | null;
  resetTriggerChange: any;
}

const ProductItem = ({
  barcode,
  brand,
  category,
  description,
  image,
  price,
  producer,
  size,
  sizeType,
  title,
  addToCart,
  adminMode,
  deleteItem,
  categories,
  saveItem,
  triggerChange,
  resetTriggerChange,
}: ProducItemProps) => {
  const [editItem, setEditItem] = useState<boolean>(false);

  const [img, setImg] = useState<string>(image);

  const [selectedSizeType, setSelectedSizeType] = useState<string>(sizeType);
  const [selectedSize, setSelectedSize] = useState<number>(size);
  const [customProducer, setCustomProducer] = useState<string>(producer);
  const [customBrand, setCustomBrand] = useState<string>(producer);
  const [customPrice, setCustomPrice] = useState<number>(price);
  const [customTitle, setCustomTitle] = useState<string>(title);
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(category);

  const changeItem = () => {
    setEditItem((prev) => !prev);
  };

  useEffect(() => {
    if (barcode === triggerChange) {
      changeItem();
      resetTriggerChange();
    }
  }, [triggerChange]);

  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        setImg(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategories(
      Array.from(event.target.selectedOptions, (option) => option.value)
    );
  };

  return (
    <>
      <li className={styles.item}>
        <div className={`${styles.image} ${editItem ? styles.imageSmall : ""}`}>
          {/*        <img src={img} alt="изображение товара" ></img> */}
          {isBase64(img)}
        </div>

        {editItem ? <input type="file" onChange={handleImageChange} /> : null}
        <div className={styles.flex}>
          {" "}
          {editItem ? (
            <input
              className={styles.inputGr}
              onChange={(e) => setSelectedSize(+e.target.value)}
              type="text"
              defaultValue={size}
            />
          ) : (
            <p>{size}</p>
          )}{" "}
          {selectedSizeType === "вес" ? (
            <p>гр</p>
          ) : selectedSizeType === "объем" ? (
            <p>мл</p>
          ) : (
            <p>шт</p>
          )}
          {editItem ? (
            <select
              className={styles.selectGr}
              value={sizeType}
              onChange={(e) => setSelectedSizeType(e.target.value)}
            >
              <option value="вес">вес</option>
              <option value="объем">объем</option>
              <option value="шт">шт</option>
            </select>
          ) : null}
        </div>

        <p className={styles.title}>
          {editItem ? (
            <input
              className={styles.inputTitle}
              type="text"
              defaultValue={title}
              onChange={(e) => setCustomTitle(e.target.value)}
            />
          ) : (
            <Link to={`/item/${barcode}`}>{title}</Link>
          )}
        </p>

        <div className={styles.flex}>
          <p className={styles.key}>Штрихкод:</p>
          <p className={styles.value}>{barcode}</p>
        </div>
        <div className={styles.flex}>
          <p className={styles.key}>Производитель:</p>
          <p className={styles.value}>
            {editItem ? (
              <input
                onChange={(e) => setCustomProducer(e.target.value)}
                type="text"
                defaultValue={producer}
              />
            ) : (
              producer
            )}
          </p>
        </div>
        <div className={styles.flex}>
          <p className={styles.key}>Бренд:</p>
          <p className={styles.value}>
            {editItem ? (
              <input
                onChange={(e) => setCustomBrand(e.target.value)}
                type="text"
                defaultValue={brand}
              />
            ) : (
              brand
            )}
          </p>
        </div>
        <div className={styles.flex}>
          {editItem ? (
            <>
              <select
                className={styles.selectMulti}
                multiple
                value={selectedCategories}
                onChange={handleCategoryChange}
              >
                {categories.map((c: string) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <div className={styles.categoryContainer}>
              {category.map((c: string) => (
                <p className={styles.category} key={c}>
                  {c}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className={styles.flex}>
          <div className={styles.price}>
            {editItem ? (
              <div className={styles.adminFlex}>
                <p>цена:</p>{" "}
                <input
                  onChange={(e) => setCustomPrice(+e.target.value)}
                  type="text"
                  defaultValue={price}
                />{" "}
              </div>
            ) : (
              <p className={styles.price}>
                {price} <span>&#8381;</span>
              </p>
            )}
          </div>
          {!editItem ? (
            <button
              className={`${styles.button} button-large`}
              onClick={() =>
                addToCart(
                  barcode,
                  image,
                  producer,
                  brand,
                  price,
                  title,
                  size,
                  sizeType,
                  description,
                  category
                )
              }
            >
              <p>В корзину</p>
              <img src={cartIcon} alt="иконка корзины"></img>
            </button>
          ) : null}
        </div>

        {editItem ? (
          <div className={styles.adminFlex}>
            <button
              className={styles.adminButton}
              onClick={() =>
                saveItem(
                  barcode,
                  img,
                  selectedSize,
                  selectedSizeType,
                  customProducer,
                  customBrand,
                  customPrice,
                  customTitle,
                  selectedCategories
                )
              }
            >
              Сохранить
            </button>
            <button className={styles.adminButton} onClick={changeItem}>
              Отменить
            </button>
          </div>
        ) : null}

        {adminMode && !editItem ? (
          <div className={styles.adminFlex}>
            <button
              className={styles.adminButton}
              onClick={() => deleteItem(barcode)}
            >
              Удалить
            </button>{" "}
            <button className={styles.adminButton} onClick={changeItem}>
              Редактировать
            </button>{" "}
          </div>
        ) : null}
      </li>
    </>
  );
};

export default ProductItem;
