import React from "react"
import Item from "./Item"

const ItemList = ({ items }) => {
    return (
        items.map(prod => (
            <Item
                key= {prod.idProd}
                id= {prod.idProd}
                imagen= {prod.imagen}
                nombre= {prod.nombre}
                categoria= {prod.categoria}  
                precio= {prod.precio}
                cantidad= {prod.cantidad}
                descripcion= {prod.descripcion}              
            />
        ))
    )
}

export default ItemList