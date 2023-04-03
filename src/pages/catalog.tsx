import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

import CategoryList from "../components/categoryList";
import CheckboxList from "../components/checkboxList";
import PriceFilter from "../components/priceFilter";
import ProductList from "../components/productList";

import Form from "../components/form";
import { RootObject } from "../interfaces";
import styles from "../styles/catalog.module.css";

import { Product } from "../App";
import initiazieItemsWithCount from "../functions/initializeItemsWithCount";
import SortItems from "../components/sortItems";
import { Link } from "react-router-dom";
import trash from "../assets/icons/delete.svg";

interface CatalogProps {
  data: RootObject;
  items: Product[];
  setItems: Dispatch<SetStateAction<Product[]>>;
  setItemsInCart: Dispatch<SetStateAction<Product[]>>;
  itemsInCart: Product[];
  children?: React.ReactNode;
}

const Catalog = ({
  data,
  items,
  setItems,
  setItemsInCart,
  itemsInCart,
  children,
}: CatalogProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Уход за телом");
  const [selectedProductCheckBoxes, setSelectedProductCheckBoxes] = useState<
    string[]
  >([]);
  const [selectedBrandCheckBoxes, setSelectedBrandCheckBoxes] = useState<
    string[]
  >([]);

  const [adminMode, setAdminMode] = useState<boolean>(false);

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);

  const [producers, setProducers] = useState<{ name: string; count: number }[]>(
    []
  );
  const [brands, setBrands] = useState<{ name: string; count: number }[]>([]);

  const [handleFilters, setHandleFilters] = useState<Product[]>([]);

  const [dropdown, setDropdown] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  interface Item {
    category: string[];
    price: number;
  }

  useEffect(() => {
    setCategories([
      ...new Set<string>(data?.products.flatMap((e) => e.category)),
    ]);
  }, []);

  useEffect(() => {
    const newItem = initiazieItemsWithCount(data);

    const filtered = newItem.filter((e: Item) =>
      e.category.includes(selectedCategory)
    );
    setCurrentPage(1);

    selectedCategory !== "Уход за телом"
      ? setItems(filtered)
      : setItems(newItem);
  }, [selectedCategory]);

  const checkboxFilter = (array: Product[], selectedCheckBoxes: string[]) => {
    if (selectedCheckBoxes.length !== 0) {
      return array.filter(
        (e) =>
          selectedCheckBoxes.includes(e.producer) ||
          selectedCheckBoxes.includes(e.brand)
      );
    }
    return array;
  };

  const priceFilter = (array: Product[]): Product[] => {
    return array.filter((e: Item) => e.price > minPrice && e.price < maxPrice);
  };

  useEffect(() => {
    let result2: any = localStorage.getItem("items9090");
    let result = JSON.parse(result2);

    result = checkboxFilter(result, selectedProductCheckBoxes);
    result = checkboxFilter(result, selectedBrandCheckBoxes);
    result = priceFilter(result);

    const uniqueProducer = [
      ...new Set(data.products.flatMap((e) => e.producer)),
    ];
    const prod = uniqueProducer.map((e) => ({
      name: e,
      count: result?.filter((str: any) => str.producer === e).length,
    }));
    const uniqueBrand = [...new Set(data.products.flatMap((e) => e.brand))];
    const brand = uniqueBrand.map((e) => ({
      name: e,
      count: result?.filter((str: any) => str.brand === e).length,
    }));

    setProducers(prod);
    setBrands(brand);

    setHandleFilters(result);
  }, [
    selectedProductCheckBoxes,
    selectedBrandCheckBoxes,
    minPrice,
    maxPrice,
    items,
  ]);

  const applyFilters = () => {
    setItems(handleFilters);
  };
  const deleteFilters = () => {
    const lsData: any = localStorage.getItem("items9090");
    const parsedData = JSON.parse(lsData);

    setItems(parsedData);
  };

  return (
    <div className={styles.catalog}>
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
      </div>
      <div className={styles.flexSB}>
        <h2 className={styles.title}>Косметика и гигиена</h2>
        <div className={styles.sortDesk}>
          <SortItems items={items} setItems={setItems} />
        </div>
      </div>

      <CategoryList
        categories={categories}
        vertical={false}
        setSelectedCategory={setSelectedCategory}
      />
      <div className={styles.flex}>
        <div>
          <div className={styles.flexDropdown}>
            <h3 className={styles.titleSmall}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
            <button
              onClick={() => setDropdown((prev) => !prev)}
              className={styles.dropdownBtn}
            >
              {" "}
              <div
                className={dropdown ? styles.arrowUp : styles.arrowDown}
              ></div>
            </button>
          </div>

          {dropdown ? (
            <div className={styles.controls}>
              <PriceFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
              />
              <CheckboxList
                items={producers}
                selectedCheckBoxes={selectedProductCheckBoxes}
                setSelectedCheckBoxes={setSelectedProductCheckBoxes}
                title={"Производитель"}
              />
              <CheckboxList
                items={brands}
                selectedCheckBoxes={selectedBrandCheckBoxes}
                setSelectedCheckBoxes={setSelectedBrandCheckBoxes}
                title={"Бренд"}
              />

              <div className={styles.buttonContainer}>
                <button
                  onClick={applyFilters}
                  className={`${styles.buttonlarge} button-large`}
                >
                  Показать
                </button>
                <button onClick={deleteFilters} className={styles.button}>
                  <img src={trash} alt="иконка мусорное ведро"></img>
                </button>
              </div>
            </div>
          ) : null}

          <CategoryList
            categories={categories}
            vertical={true}
            setSelectedCategory={setSelectedCategory}
          />
          <div className={styles.sortMobile}>
            <SortItems items={items} setItems={setItems} />
          </div>

          <button
            onClick={() => setAdminMode((prev) => !prev)}
            className={styles.buttonAdmin}
          >
            РЕЖИМ АДМИНА
          </button>

          {adminMode ? (
            <Form
              categories={categories}
              adminMode={adminMode}
              setItems={setItems}
            />
          ) : null}
        </div>
        <ProductList
          categories={categories}
          setItemsInCart={setItemsInCart}
          items={items}
          setItems={setItems}
          adminMode={adminMode}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Catalog;
