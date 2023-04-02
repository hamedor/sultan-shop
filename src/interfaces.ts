export interface RootObject {
  products: Product[];
}

export interface Product {
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
