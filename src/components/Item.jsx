import React from "react"
import "../styles/Item.css"
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom"

const Item = ({ id, nombre, precio, cantidad, imagen }) => {
    return (
        <Card className="card-container">
            <div className="card-img-container">
                <Card.Img className="card-img" variant="top" src={imagen} />
            </div>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Card.Text>Unidades: {cantidad}</Card.Text>
            </Card.Body>
            <NavLink to={`/item/${id}`} href="#"><button className="btn btn-primary">Detalles</button></NavLink>
        </Card>
    )
}

export default Item