import "../styles/CartWidget.css"
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "./CartContext"
import Badge from "react-bootstrap/Badge"

const CartWidget = () => {

    const { countCartItems } = useContext(CartContext)

    return (
        <NavLink to={"/cart"} href="#" className="link-style">
            <div className="carrito d-flex align-items-center gap-1">
                <GiShoppingCart className="logo-carrito"/>
                <Badge pill bg="danger">{countCartItems()}</Badge>
            </div>
        </NavLink>
    )
}

export default CartWidget