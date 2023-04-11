import { Dispatch, SetStateAction } from "react";
import { Item,ItemInCart } from "../interfaces";



const addToCart = (item:Item, setItemsInCart?:Dispatch<SetStateAction<ItemInCart[]>>) => {

        setItemsInCart?.((old) => {
          const itemExists = old.some((e) => e.barcode === item.barcode);
          if (itemExists) {
            return old.map((e) =>
              e.barcode === item.barcode ? { ...e, count: e.count + 1 } : e
            );
          } else {
            return [...old, { ...item, count: 1 }];
          }
        });
};

export default addToCart;