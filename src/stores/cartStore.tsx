import { makeAutoObservable } from "mobx"
import toLocalstorage from '../functions/toLocalStorage';
import { ItemInCart, Item } from '../interfaces';

class CartStore {
  itemsInCart: ItemInCart[]
  itemsCount: number = 0
  price: number = 0

  constructor(initialItemsInCart: ItemInCart[]) {
    makeAutoObservable(this)
    this.itemsInCart = initialItemsInCart
  }

  setItemsInCart(itemsInCart: ItemInCart[]) {
    this.itemsInCart = itemsInCart
    this.updateItemsCount()
    this.updatePrice()
    toLocalstorage('cart9090', this.itemsInCart)
  }
  deleteItem(barcode: number) {
    this.itemsInCart = this.itemsInCart.filter(item => item.barcode !== barcode)
    this.updateItemsCount()
    this.updatePrice()
    toLocalstorage('cart9090', this.itemsInCart)
  }
  decreaseCount(barcode: number) {
    this.itemsInCart = this.itemsInCart.map(item =>
      item.barcode === barcode ? { ...item, count: item.count - 1 } : item
    ).filter(item => item.count > 0)
    this.updateItemsCount()
    this.updatePrice()
    toLocalstorage('cart9090', this.itemsInCart)
  }
  
  addToCart(item: Item) {
    const itemExists = this.itemsInCart.some(i => i.barcode === item.barcode)
    if (itemExists) {
      this.itemsInCart = this.itemsInCart.map(i =>
        i.barcode === item.barcode ? { ...i, count: i.count + 1 } : i
      )
    } else {
      this.itemsInCart = [...this.itemsInCart, { ...item, count: 1 }]
    }
    this.updateItemsCount()
    this.updatePrice()
    toLocalstorage('cart9090', this.itemsInCart)
  }

  updateItemsCount() {
    this.itemsCount = this.itemsInCart.reduce((acc: number, curr: ItemInCart) => {
      return acc + curr.count
    }, 0)
  }


  updatePrice() {
    this.price = this.itemsInCart.reduce((acc: number, curr: ItemInCart) => {
      return acc + curr.count * curr.price
    }, 0)
  }
}

const store = new CartStore([])
export default store