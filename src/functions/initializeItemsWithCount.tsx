import { RootObject } from "../interfaces";

const initiazieItemsWithCount = (data: RootObject) => {
  const localStorageData = localStorage.getItem("items9090");

  if (localStorageData !== "[]" && localStorageData) {
    const parsedData = JSON.parse(localStorageData);

    localStorage.setItem("items9090", JSON.stringify(parsedData));
    return parsedData;
  } else {
    const newData = data.products.map((product) => ({ ...product, count: 0 }));
    localStorage.setItem("items9090", JSON.stringify(newData));
    return newData;
  }
};

export default initiazieItemsWithCount;
