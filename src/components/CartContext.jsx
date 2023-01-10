import { useState, createContext } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    const addItem = (item, quantity) => {
        isInCart(item.idProd)
        ? addCartItemQty(item, quantity)
        : setCartItems([...cartItems, {
                idProd: item.idProd,
                nombre: item.nombre,
                precio: item.precio,
                qty: quantity
            }])
        }

    const addCartItemQty = (item, quantity) => {
        const itemToUpdate = cartItems.find(itemCart => itemCart.idProd === item.idProd)
        const cartUpdate = cartItems.map(itemCart =>
            itemCart.idProd === itemToUpdate.idProd
            ? {
                idProd: itemCart.idProd,
                nombre: itemCart.nombre,
                precio: item.precio,
                qty: itemCart.qty + quantity
            }
            : itemCart
        )
        setCartItems(cartUpdate)
    }

    const removeItem = (itemId) => {
        const updateCart = cartItems.filter(item => item.idProd !== itemId)
        setCartItems(updateCart)
    }

    const clearCart = () => {
        setCartItems([])
    }

    const isInCart = (itemId) => cartItems.some(item => item.idProd === itemId)

    const countCartItems = () => {
        const cantItems = cartItems.reduce((acum, item) => acum + item.qty, 0)
        if (cantItems > 0) {
            return cantItems
        }
    }

    const calcTotalPrice = () => cartItems.reduce((acum, item) => acum + (item.precio * item.qty), 0)

    return (
        <CartContext.Provider value={{cartItems, addItem, removeItem, clearCart, isInCart, countCartItems, calcTotalPrice}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider