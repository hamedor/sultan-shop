import { ItemInCart } from "../interfaces"

const toLocalstorage = (storage:string, item:ItemInCart[]) => {
    localStorage.setItem(storage, JSON.stringify(item));
}

export default toLocalstorage