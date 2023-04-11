const initializeItemsInCart = () => {
    const items = localStorage.getItem("cart9090");
    return items ? JSON.parse(items) : [];
}

export default initializeItemsInCart;