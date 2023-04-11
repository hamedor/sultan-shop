import { Item, ItemInCart } from "../interfaces";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import styles from "../styles/itemList.module.css";

import ItemAndForm from "./itemAndForm";
import PaginationButtons from "./features/paginationButtons";



interface ItemListProps {
  items: Item[];
  setItemsInCart: Dispatch<SetStateAction<ItemInCart[]>>;
  adminMode: boolean;
  setItems: Dispatch<SetStateAction<Item[]>>;
  categories: string[];
  currentPage:number;
  setCurrentPage:Dispatch<SetStateAction<number>>;
}

const ItemList = ({
  categories,
  items,
  setItemsInCart,
  setItems,
  adminMode,
  currentPage,
  setCurrentPage
}: ItemListProps) => {
 


  const [paginatedItems, setPaginatedItems] = useState(items);


  return (
    <section className={styles.products}>
      <ul className={styles.list}>
        {paginatedItems?.map((e) => {
          return (
            <ItemAndForm
              showTotalItems={true}
              key={e.barcode}
              setItems={setItems}
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
              adminMode={adminMode}
              categories={categories}
              setItemsInCart={setItemsInCart}

            />
          );
        })}
      </ul>

      <PaginationButtons currentPage={currentPage} setCurrentPage={setCurrentPage} setPaginatedItems={setPaginatedItems} items={items}/>
    </section>
  );
};

export default ItemList;
