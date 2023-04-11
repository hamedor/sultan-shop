export interface RootObject {
  items: Item[];
}

export interface Item {
  image: string;
  title: string;
  sizeType: string;
  size: number;
  barcode: number;
  producer: string;
  brand: string;
  description: string;
  price: number;
  category: string[];
}


export interface ItemInCart extends Item {
  count: number;

}
