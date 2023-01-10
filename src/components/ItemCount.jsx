import React from "react"
import Button from "react-bootstrap/Button"
import { useState } from "react"

const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(0)
    const incrementarUnidadItem = () => {
        setCount(count + 1)
    }

    const restarUnidadItem = () => {
        count > 0 && setCount(count - 1)
    }

    return (
        <div className="d-flex flex-row align-items-center">
            <button variant="btn px-md-2 btn-md" onClick={restarUnidadItem}> - </button>
            <h5 className="text-grey px-md-2">{count}</h5>
            <button variant="btn px-md-2 btn-md" onClick={incrementarUnidadItem}> + </button>
            {
            count
            ? <Button className="btn btn-primary mx-md-2" onClick={() => onAdd(count)}>Agregar al carrito</Button>
            : <Button className="btn btn-primary mx-md-2" disabled>Agregar al carrito</Button>
            }
        </div>
    )
}
export default ItemCount