import { Product } from "../App";
import { useState, useEffect } from "react";
import styles from "../styles/productList.module.css";
import ProductItem from "./productItem";
import { Dispatch, SetStateAction } from "react";

interface ProductListProps {
  items: Product[];
  setItemsInCart: (items: Product[]) => void;
  adminMode: boolean;
  setItems: Dispatch<SetStateAction<Product[]>>;
  categories: string[];
  currentPage:number;
  setCurrentPage:any;
}

const ProductList = ({
  categories,
  items,
  setItemsInCart,
  setItems,
  adminMode,
  currentPage,
  setCurrentPage
}: ProductListProps) => {
 
  const itemsPerPage = 9;

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;

  const paginatedItems = items.slice(firstItem, lastItem);

  const pageNumbers = [];
  const totalPages = Math.ceil(items.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const pageDown = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const pageUp = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const [triggerChange, setTriggerChange] = useState<number | null>(null);

  const [array, setArray] = useState<any>(() => {
    const items = localStorage.getItem("cart9090");
    return items ? JSON.parse(items) : [];
  });

  const addToCart = (
    barcode: number,
    image: string,
    producer: string,
    brand: string,
    price: number,
    title: string,
    size: number,
    sizeType: string,
    description: string,
    category: string[]
  ) => {
    setArray((old: any) => [
      ...old,
      {
        barcode,
        image,
        producer,
        brand,
        price,
        title,
        sizeType,
        size,
        description,
        category,
      },
    ]);
  };

  useEffect(() => {
    const counts = array?.reduce((acc: any, curr: any) => {
      const item = acc.find(({ barcode }: any) => barcode === curr.barcode);
      item
        ? item.count++
        : acc.push({
            barcode: curr.barcode,
            image: curr.image,
            producer: curr.producer,
            brand: curr.brand,
            price: curr.price,
            title: curr.title,
            size: curr.size,
            description: curr.description,
            category: curr.category,
            count: curr.count || 1,
          });
      return acc;
    }, []);

    setItemsInCart(counts);

    localStorage.setItem("cart9090", JSON.stringify(counts));
  }, [array]);

  const deleteItem = (barcode: number) => {
    setItems((old: any) => {
      const newItems = old.filter((e: any) => e.barcode !== barcode);
      localStorage.setItem("items9090", JSON.stringify(newItems));
      return newItems;
    });
  };

  const saveItem = (
    barcode: number,
    image: string,
    selectedSize: string,
    selectedSizeType: string,
    customProducer: string,
    customBrand: string,
    customPrice: number,
    customTitle: string,
    selectedCategories: string[]
  ) => {
    setItems((old): any => {
      const newItems = old.map((e) =>
        e.barcode === barcode
          ? {
              ...e,
              image,
              size: selectedSize,
              sizeType: selectedSizeType,
              producer: customProducer,
              brand: customBrand,
              price: customPrice,
              title: customTitle,
              category: selectedCategories,
            }
          : e
      );
      localStorage.setItem("items9090", JSON.stringify(newItems));
      return newItems;
    });

    setTriggerChange(barcode);
  };

  const resetTriggerChange = () => {
    setTriggerChange(null);
  };

  return (
    <section className={styles.products}>
      <ul className={styles.list}>
        {paginatedItems?.map((e) => {
          return (
            <ProductItem
              key={e.barcode}
              barcode={e.barcode}
              brand={e.brand}
              category={e.category}
              description={e.description}
              image={e.image}
              price={e.price}
              producer={e.producer}
              size={e.size}
              sizeType={e.sizeType}
              title={e.title}
              addToCart={addToCart}
              adminMode={adminMode}
              deleteItem={deleteItem}
              categories={categories}
              saveItem={saveItem}
              triggerChange={triggerChange}
              resetTriggerChange={resetTriggerChange}
            />
          );
        })}
      </ul>
      <ul className={styles.buttons}>
        <li className={styles.leftButton}>
          <button onClick={pageDown}></button>
        </li>
        {pageNumbers.map((e: number) => {
          return (
            <li
              className={currentPage === e ? `${styles.pageNumButton}` : ""}
              key={e}
            >
              <button onClick={() => setCurrentPage(e)}>{e}</button>
            </li>
          );
        })}

        <li className={styles.rightButton}>
          <button onClick={pageUp}></button>
        </li>
      </ul>
    </section>
  );
};

export default ProductList;
