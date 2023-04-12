import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

import { Item, ItemInCart } from "../interfaces";
import { defaultImage } from "../assets/defaultImage";
import initializeItems from "../functions/initializeItems";
import generateBarcode from "../functions/generateBarcode";

import TotalItems from "./item/totalItems";
import ItemImage from "./item/itemImage";

import styles from "../styles/itemAndForm.module.css";
import TotalForm from "./form/totalForm";


interface ItemAndFormProps {
  alwaysShowTotalForm?: boolean;
  showTotalItems?:boolean; 
  adminMode: boolean;
  setItems: Dispatch<SetStateAction<Item[]>>;
  image?: string;
  sizeType?: string;
  size?: number;
  producer?: string;
  brand?: string;
  description?:string,
  price?: number;
  title?: string;
  category?: string[];
  categories: string[];
  barcode?: number;
  setItemsInCart?: Dispatch<SetStateAction<ItemInCart[]>>;
}

export interface ItemAndFormChildProps{
    setItem: React.Dispatch<React.SetStateAction<Item>>;
}

const ItemAndForm = ({
    alwaysShowTotalForm,
    showTotalItems,
    adminMode,
    setItems,
    image,
    sizeType,
    size,
    producer,
    description,
    brand,
    price,
    title,
    category,
    categories,
    barcode,
    setItemsInCart
 }: ItemAndFormProps) => {
  

  const [isItemEdit, setisItemEdit] = useState<boolean>(false);
    
  const [item, setItem] = useState<Item>({
        image: image || '',
        sizeType: sizeType || '',
        size: size || 0,
        producer: producer || '',
        description: description || '',
        brand: brand || '',
        price: price || 0,
        title: title || '',
        category: category || [],
        barcode: barcode || 0
  })



  const saveItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    if (barcode) {
      updateItem();
    } else {
      createItem();
    }
  };

  const updateItem = () => {
    setItems((old): Item[]=> {
      const newItems = old.map((e) =>
        e.barcode === barcode
          ? {
              ...e,
              image: item.image,
              size: item.size,
              sizeType: item.sizeType,
              producer: item.producer,
              brand: item.brand,
              price: item.price,
              title: item.title,
              category: item.category,
            }
          : e
      );

      localStorage.setItem("items9090", JSON.stringify(newItems));
      setisItemEdit(false);
      return newItems;
    });
  }
  const createItem = () => {
    const items: Item[] = initializeItems();
    const id = generateBarcode(items.map((e: Item) => e.barcode));

    const newItem = {
      image: item.image || defaultImage,
      sizeType: item.sizeType || "вес",
      size: item.size || 120,
      producer: item.producer || "Россия",
      brand: item.brand || "Palmolive",
      description:
        item.description ||
        "Palmolive Натурэль Роскошная Мягкость с экстрактом орхидеи и молочка содержит увлажняющий компонент, придающий коже ощущение соблазнительной мягкости.",
      barcode: id,
      price: item.price || 89,
      title:
        item.title ||
        "Мыло твердое `PALMOLIVE` Роскошная мягкость с экстрактом орхидеи",
      category: item.category || [
        "Уход за лицом",
        "Уход за руками",
        "Уход за ногами",
      ],
    };

    items.push(newItem);

    try {
      localStorage.setItem("items9090", JSON.stringify(items));
    } catch (e: any) {
      if (e.name === "QuotaExceededError") {
        alert("LocalStorage переполнен!");
      }
    }

    setItems(items);
  };
  
    
  const deleteItem = (barcode: number | undefined) => {
    setItems((old:Item[]) => {
      const newItems = old.filter((e: any) => e.barcode !== barcode);
      localStorage.setItem("items9090", JSON.stringify(newItems));
      return newItems;
    });
  };
  

  
  return (
    <>
      {showTotalItems && !isItemEdit && (
        <li className={styles.item}>
          <TotalItems category={category}  item={item} isItemEdit={isItemEdit} size={size} sizeType={sizeType} setItemsInCart={setItemsInCart}/>
          {adminMode && (
            <div className={styles.adminFlex}>
              <button className={styles.adminButton} onClick={() => deleteItem(barcode)}>
                Удалить
              </button>{" "}
              <button className={styles.adminButton} onClick={()=> setisItemEdit((prev)=>!prev)}>
                Редактировать
              </button>{" "}
            </div>
          )}
        </li>
      )}
      {adminMode && (alwaysShowTotalForm || isItemEdit) && (
        <>
          {item.image && <ItemImage item={item} isItemEdit={isItemEdit} />}
          <TotalForm wide={!alwaysShowTotalForm}  setItem={setItem} item={item} categories={categories} saveItem={saveItem} />
        </>
      )}
    </>
  );
};

export default ItemAndForm;

