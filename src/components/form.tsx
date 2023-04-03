import { useEffect, useState } from "react";
import styles from "../styles/form.module.css";
import { Dispatch, SetStateAction } from "react";
import { Product } from "../App";
import { defaultImage } from "../assets/defaultImage";

interface Item {
  barcode: string;
}
interface FormProps {
  categories: string[];
  adminMode: boolean;
  setItems: Dispatch<SetStateAction<Product[]>>;
}

const Form = ({ categories, adminMode, setItems }: FormProps) => {
  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false);

  const [img, setImg] = useState<string>();
  const [selectedSizeType, setSelectedSizeType] = useState<string>();
  const [size, setSize] = useState<number>();
  const [producer, setProducer] = useState<string>();
  const [brand, setBrand] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>();

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

  const generateBarcode = (barcodes: number[]) => {
    const min = 100000;
    const max = 999999;

    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (barcodes.includes(number)) {
      generateBarcode(barcodes);
      return;
    }
    return number;
  };

  const saveItem = () => {
    const items: any = localStorage.getItem("items9090");
    const parsed = JSON.parse(items);

    const barcode = generateBarcode(parsed.map((e: Item) => e.barcode));

    const newItem = {
      image: img || defaultImage,
      sizeType: selectedSizeType || "вес",
      size: size || 120,
      producer: producer || "Россия",
      brand: brand || "Palmolive",
      description:
        description ||
        "Palmolive Натурэль Роскошная Мягкость с экстрактом орхидеи и молочка содержит увлажняющий компонент, придающий коже ощущение соблазнительной мягкости.",
      barcode,
      price: price || 89,
      title:
        title ||
        "Мыло твердое `PALMOLIVE` Роскошная мягкость с экстрактом орхидеи",
      count: 0,
      category: selectedCategories || [
        "Уход за лицом",
        "Уход за руками",
        "Уход за ногами",
      ],
    };

    parsed.push(newItem);

    try {
      localStorage.setItem("items9090", JSON.stringify(parsed));
    } catch (e: any) {
      if (e.name === "QuotaExceededError") {
        alert("LocalStorage переполнен!");
      }
    }

    setItems(parsed);
  };

  return (
    <>
      <form className={styles.form}>
        <input
          className={styles.file}
          type="file"
          onChange={handleImageChange}
        />
        <div className={styles.flex}>
          <p className={styles.key}>вес:</p>
          <input
            className={styles.inputGr}
            onChange={(e) => setSize(+e.target.value)}
            type="text"
          />
          <select
            className={styles.selectGr}
            onChange={(e) => setSelectedSizeType(e.target.value)}
          >
            <option value="вес">вес</option>
            <option value="объем">объем</option>
          </select>
        </div>
        <div className={styles.flex}>
          <p className={styles.key}>Название:</p>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.flex}>
          <p className={styles.key}>Производитель:</p>
          <input
            className={styles.input}
            onChange={(e) => setProducer(e.target.value)}
            type="text"
          />
        </div>
        <div className={styles.flex}>
          <p className={styles.key}>Бренд:</p>
          <input
            className={styles.input}
            onChange={(e) => setBrand(e.target.value)}
            type="text"
          />
        </div>
        <div className={styles.flex}>
          <p className={styles.key}>Цена:</p>
          <input
            className={styles.input}
            onChange={(e) => setPrice(+e.target.value)}
            type="number"
          />
        </div>
        <div className={styles.flex}>
          <p className={styles.key}>Описание:</p>
          <input
            className={styles.input}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </div>
        <div className={styles.flex}>
          <select
            className={styles.selectMulti}
            multiple
            onClick={() => setSelectIsOpen(true)}
            size={selectIsOpen ? categories.length : 3}
            value={selectedCategories}
            onChange={handleCategoryChange}
          >
            {categories.map((c: string) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {selectIsOpen ? (
            <button
              className={styles.adminButton}
              onClick={() => setSelectIsOpen(false)}
            >
              закрыть меню
            </button>
          ) : null}
        </div>

        <button
          type="submit"
          className={styles.adminButton}
          onClick={() => saveItem()}
        >
          Сохранить
        </button>
      </form>
    </>
  );
};

export default Form;
