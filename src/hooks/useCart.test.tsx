import { renderHook, act } from '@testing-library/react';
import useCart from './useCart';
import { ItemInCart } from '../interfaces';

const initialItemsInCart: ItemInCart[] = [
    {
      image: 'image1.jpg',
      title: 'Item 1',
      sizeType: 'M',
      size: 10,
      barcode: 123456789,
      producer: 'Producer 1',
      brand: 'Brand 1',
      description: 'Description 1',
      price: 100,
      category: ['Category 1'],
      count: 2,
    },
    {
      image: 'image2.jpg',
      title: 'Item 2',
      sizeType: 'L',
      size: 20,
      barcode: 987654321,
      producer: 'Producer 2',
      brand: 'Brand 2',
      description: 'Description 2',
      price: 100,
      category: ['Category 2'],
      count: 1,
    },
  ];



describe('useCart', () => {
  it('Инициализация итемов в корзине', () => {

    const { result } = renderHook(() => useCart(initialItemsInCart));
    expect(result.current.itemsInCart).toEqual(initialItemsInCart);
  });

  it('Расчёт количества итемов в корзине, а также перерасчёт при изменениях', () => {
    const { result } = renderHook(() => useCart(initialItemsInCart));
    expect(result.current.itemsCount).toBe(3);
  
    act(() => {
      result.current.setItemsInCart([
        ...initialItemsInCart,
        {
          image: 'image3.jpg',
          title: 'Item 3',
          sizeType: 'S',
          size: 30,
          barcode: 123456789,
          producer: 'Producer 3',
          brand: 'Brand 3',
          description: 'Description 3',
          price: 30,
          category: ['Category 3'],
          count: 1,
        },
      ]);
    });
  
    expect(result.current.itemsCount).toBe(4);
  });

  test('Расчёт цены в корзине, а также ее перерасчет при изменениях', () => {
    const { result } = renderHook(() => useCart(initialItemsInCart));
    expect(result.current.price).toBe(300);
  
    act(() => {
      result.current.setItemsInCart([
        ...initialItemsInCart,
        {
          image: 'image3.jpg',
          title: 'Item 3',
          sizeType: 'S',
          size: 30,
          barcode: 123456789,
          producer: 'Producer 3',
          brand: 'Brand 3',
          description: 'Description 3',
          price: 100,
          category: ['Category 3'],
          count: 1,
        },
      ]);
    });
  
    expect(result.current.price).toBe(400);
  });
});
