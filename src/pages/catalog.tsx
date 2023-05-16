import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

import CategoryList from "../components/features/filtersAndSort/categoryList";
import CheckboxList from "../components/features/filtersAndSort/checkboxList";
import PriceFilter from "../components/features/filtersAndSort/priceFilter";
import ItemList from "../components/itemList";
import FilterButtons from "../components/features/filtersAndSort/filterButtons";

import { RootObject } from "../interfaces";
import styles from "../styles/catalog.module.css";

import { Item } from '../interfaces';
import initializeItems from "../functions/initializeItems";

import Breadcrumbs from "../components/breadcrumbs";
import Sort from '../components/features/filtersAndSort/sort';

import ItemAndForm from "../components/itemAndForm";

interface CatalogProps {
  data: RootObject;
  items: Item[];
  setItems: Dispatch<SetStateAction<Item[]>>;

}

const Catalog = ({
  data,
  items,
  setItems,


}: CatalogProps) => {
  
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Уход за телом");
  const [selectedProductCheckboxes, setSelectedProductCheckboxes] = useState<string[]>([]);
  const [selectedBrandCheckboxes, setSelectedBrandCheckboxes] = useState<string[]>([]);

  const [adminMode, setAdminMode] = useState<boolean>(false);

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);

  const [producers, setProducers] = useState<{ name: string; count: number }[]>([]);
  const [brands, setBrands] = useState<{ name: string; count: number }[]>([]);
  const [handleFilters, setHandleFilters] = useState<Item[]>([]);
  const [dropdown, setDropdown] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortedItems, setSortedItems] = useState<Item[]>(items);



  useEffect(() => {
    setCategories([
      ...new Set<string>(data?.items.flatMap((e) => e.category)),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newItem = initializeItems();

    const filtered = newItem.filter((e: Item) =>
      e.category.includes(selectedCategory)
    );
    setCurrentPage(1);

    selectedCategory !== "Уход за телом"
      ? setItems(filtered)
      : setItems(newItem);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const checkboxFilter = (array: Item[], selectedCheckBoxes: string[]) => {
    if (selectedCheckBoxes.length !== 0) {
      return array.filter(
        (e) =>
          selectedCheckBoxes.includes(e.producer) ||
          selectedCheckBoxes.includes(e.brand)
      );
    }
    return array;
  };

  const priceFilter = (array: Item[]): Item[] => {
    return array.filter((e: Item) => e.price > minPrice && e.price < maxPrice);
  };

  useEffect(() => {
    let result = initializeItems();

    result = checkboxFilter(result, selectedProductCheckboxes);
    result = checkboxFilter(result, selectedBrandCheckboxes);
    result = priceFilter(result);

    const uniqueProducer = [
      ...new Set(data.items.flatMap((e) => e.producer)),
    ];
    const prod = uniqueProducer.map((e) => ({
      name: e,
      count: result?.filter((str: any) => str.producer === e).length,
    }));
    const uniqueBrand = [...new Set(data.items.flatMap((e) => e.brand))];
    const brand = uniqueBrand.map((e) => ({
      name: e,
      count: result?.filter((str: any) => str.brand === e).length,
    }));

    setProducers(prod);
    setBrands(brand);

    setHandleFilters(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedProductCheckboxes,
    selectedBrandCheckboxes,
    minPrice,
    maxPrice,
    items,
  ]);





  return (
    <div className={styles.catalog}>
      <div className={styles.navMobile}>
        <div className={styles.circle}>
          <div className={styles.arrow}></div>
        </div>
        <p>НАЗАД</p>
      </div>

      <Breadcrumbs breadcrumbs ={[
            {label:'Главная', to: '/'},

          ]} />


      <div className={styles.flexSB}>
        <h2 className={styles.title}>Косметика и гигиена</h2>
        <div className={styles.sortDesk}>


        <Sort items={items} setSortedItems={setSortedItems}/>
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
                selectedCheckboxes={selectedProductCheckboxes}
                setSelectedCheckboxes={setSelectedProductCheckboxes}
                title={"Производитель"}
              />
              <CheckboxList
                items={brands}
                selectedCheckboxes={selectedBrandCheckboxes}
                setSelectedCheckboxes={setSelectedBrandCheckboxes}
                title={"Бренд"}
              />

              <div className={styles.buttonContainer}>
                <FilterButtons
                  handleFilters={handleFilters}
                  setItems={setItems}
                  setSelectedProductCheckBoxes={setSelectedProductCheckboxes}
                  setSelectedBrandCheckBoxes={setSelectedBrandCheckboxes}
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                />
              </div>
            </div>
          ) : null}

          <CategoryList
            categories={categories}
            vertical={true}
            setSelectedCategory={setSelectedCategory}
          />
          <div className={styles.sortMobile}>
            <Sort items={items} setSortedItems={setSortedItems}/>
          </div>

          <button
            onClick={() => setAdminMode((prev) => !prev)}
            className={styles.buttonAdmin}
          >
            РЕЖИМ АДМИНА
          </button>

          {adminMode ? (
            <ItemAndForm
              alwaysShowTotalForm={true}
              categories={categories}
              adminMode={adminMode}
              setItems={setItems}
            />
          ) : null}
        </div>
        <ItemList
          categories={categories}
     
          items={sortedItems}
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
