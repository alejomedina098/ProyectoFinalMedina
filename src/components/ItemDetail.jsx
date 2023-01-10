import React from "react"
import Button from "react-bootstrap/Button"
import { NavLink } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { CartContext } from "./CartContext"

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0)
    const { addItem } = useContext(CartContext)
    const onAdd = (qty) => {
        if (item.cantidad >= qty) {
            setItemCount(qty)
            addItem(item, qty)
        } else {
            alert(`No disponemos de ${qty} unidades de ${item.nombre}`)
        }
    }

    return (
    <div className="mb-3 pt-3" >
        <div className="row md-12">
            <div className="col md-4">
                <img className="img-square-wrapper" src={item.imagen} alt={item.nombre}/>
            </div>
            <div className="col md-8">
                <div className="card-body">
                    <h5 className="card-title"><b>{item.nombre}</b></h5>
                    <p className="card-text mb-2 text-muted">{item.categoria}</p>
                    <p className="card-text">Precio: <b>$ {item.precio}</b></p>
                    <p className="card-text">Cantidad: <b>{item.cantidad}</b></p>
                    <p className="card-text">{item.descripcion}</p>
                    {
                    itemCount
                    ? <NavLink to={`/cart`} href="#"><Button className="mx-5 mt-3" variant="danger">Checkout</Button></NavLink>
                    : <ItemCount onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail