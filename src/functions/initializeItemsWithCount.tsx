import { RootObject } from "../interfaces";

const initiazieItemsWithCount = (data: RootObject) => {
  const localStorageData = localStorage.getItem("items");

  if (localStorageData !== "[]" && localStorageData) {
    const parsedData = JSON.parse(localStorageData);

    localStorage.setItem("items", JSON.stringify(parsedData));
    return parsedData;
  } else {
    const newData = data.products.map((product) => ({ ...product, count: 0 }));
    localStorage.setItem("items", JSON.stringify(newData));
    return newData;
  }
};

export default initiazieItemsWithCount;
