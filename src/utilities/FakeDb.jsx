const addToDb = id =>{
    let shoppingCart = getShoppingCart();

    const quantity = shoppingCart[id];

     if(!quantity) {
        shoppingCart[id] = 1
     } else {
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
     }
     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem("shopping-cart")
    if (storedCart) {
        const shopCart = JSON.parse(storedCart)
        if (id in shopCart) {
            delete shopCart[id]
            localStorage.setItem("shopping-cart", JSON.stringify(shopCart));
        }
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem("shopping-cart")
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteFromDb = () => {
    localStorage.removeItem("shopping-cart")
}
export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteFromDb
}