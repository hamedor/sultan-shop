import  {CartStore} from './cartStore';
import { ItemInCart, Item } from '../interfaces';

describe('CartStore', () => {
  let cartStore: CartStore;
  let item1: Item = {
    image: 'image1.jpg',
    title: 'Item 1',
    sizeType: 'Small',
    size: 1,
    barcode: 1,
    producer: 'Producer 1',
    brand: 'Brand 1',
    description: 'Description of item 1',
    price: 10,
    category: ['Category 1', 'Category 2']
  };
  
  let item2: Item= {
    image: 'image2.jpg',
    title: 'Item 2',
    sizeType: 'Large',
    size: 2,
    barcode: 2,
    producer: 'Producer 2',
    brand: 'Brand 2',
    description: 'Description of item 2',
    price: 20,
    category: ['Category 3', 'Category 4']
  };

  let itemWithCount1: ItemInCart = {
    ...item1,
    count: 3
  };
  let itemWithCount2: ItemInCart = {
    ...item1,
    count: 2
  };

  beforeEach(() => {
    cartStore = new CartStore([]);
  });



  test('добавляет товар в корзину', () => {
    cartStore.addToCart(item1);
    expect(cartStore.itemsInCart).toEqual([{ ...item1, count: 1 }]);
    expect(cartStore.itemsCount).toBe(1);
    expect(cartStore.price).toBe(10);
  });

  test('если товар уже имеется в корзине, увеличивает его количество', () => {
    cartStore.addToCart(item1);
    cartStore.addToCart(item1);
    expect(cartStore.itemsInCart).toEqual([{ ...item1, count: 2 }]);
    expect(cartStore.itemsCount).toBe(2);
    expect(cartStore.price).toBe(20);
  });

  test('уменьшает количество товара', () => {
    cartStore.addToCart(item1);
    cartStore.addToCart(item1);
    cartStore.decreaseCount(item1.barcode);
    expect(cartStore.itemsInCart).toEqual([{ ...item1, count: 1 }]);
    expect(cartStore.itemsCount).toBe(1);
    expect(cartStore.price).toBe(10);
  });

  test('удаляет товар из корзины, если count === 0', () => {
    cartStore.addToCart(item1);
    cartStore.decreaseCount(item1.barcode);
    expect(cartStore.itemsInCart).toEqual([]);
    expect(cartStore.itemsCount).toBe(0);
    expect(cartStore.price).toBe(0);
  });

  test('удаляет товар из корзины', () => {
    cartStore.addToCart(item1);
    cartStore.addToCart(item2);
    cartStore.deleteItem(item1.barcode);
    expect(cartStore.itemsInCart).toEqual([{ ...item2, count: 1 }]);
    expect(cartStore.itemsCount).toBe(1);
    expect(cartStore.price).toBe(20);
  });

  test('корректно считается количество товара и его цена при добавлении в корзину', () => {
    cartStore.setItemsInCart([itemWithCount1,itemWithCount2])
    expect(cartStore.itemsInCart).toEqual([itemWithCount1, itemWithCount2]);
    expect(cartStore.itemsCount).toBe(5);
    expect(cartStore.price).toBe(50);
  })

});