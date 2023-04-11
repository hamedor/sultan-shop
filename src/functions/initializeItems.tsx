import data from "../assets/data.json";

const initializeItems = () => {
  const localStorageData = localStorage.getItem("items9090");

  if (localStorageData !== "[]" && localStorageData) {
    const parsedData = JSON.parse(localStorageData);

    localStorage.setItem("items9090", JSON.stringify(parsedData));
    return parsedData;
  } else {
    const newData = data.items.map((item) => ({ ...item}));
    localStorage.setItem("items9090", JSON.stringify(newData));
    return newData;
  }
};

export default initializeItems;
