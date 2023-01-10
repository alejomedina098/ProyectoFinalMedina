import { CartContext } from "./CartContext"
import { useContext } from "react"
import Button from "react-bootstrap/Button"
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Cart = () => {

    const { clearCart, cartItems, calcTotalPrice, removeItem } = useContext(CartContext)

    const MySwal = withReactContent(Swal)

    const mostrarAlert = (titulo, mensaje, icono) => {
        MySwal.fire(
            titulo,
            mensaje,
            icono
        )
    }

    const crearOrden = () => {
        const orden = {
            comprador: {
                nombre: "Leo Messi",
                telefono: "123456789",
                email: "Leo@campeonmundial.com"
            },
            fecha: serverTimestamp(),
            items: cartItems.map(item => ({
                id: item.idProd,
                nombre: item.nombre,
                precio: item.precio,
                cantidad: item.qty
            })),
            total: calcTotalPrice()
        }

        const sendOrderToFireStore = async() => {
            const newProductRef = doc(collection(db, "orders"))
            await setDoc(newProductRef, orden)
            return newProductRef
        }

        sendOrderToFireStore()
            .then(result => {
                mostrarAlert("Compra exitosa", `se generó la orden de compra nro: ${result.id}`, "success")

                // Actualizando stock
                const updateOrderFirestore = async(item) => {
                    const itemRef = doc(db, "products", item.idProd)
                    await updateDoc(itemRef, {
                        cantidad: increment(-item.qty)
                    })
                    return itemRef
                }

                cartItems.forEach((item) =>
                    updateOrderFirestore(item)
                        .then(result => console.log("Stock actualizado correctamente"))
                        .catch(err => console.log(err))
                )
                clearCart()
            })
            .catch(err => console.log(err))
    }

    return (
    <>
    <div className="container pt-3">
        <div className="col-md-12">
            <div className="row"> 
                <h2>Finalizar Compra</h2>
                {
                    cartItems.length
                    ? <>
                        {
                            cartItems.map(item =>
                                <div className="row md-8" key={item.idProd}>
                                    <div className="col md-4">
                                        <h4>{item.nombre}</h4>
                                        <p>Cantidad: {item.qty}</p>
                                        <p>Precio unitario: {item.precio}</p>
                                    </div>
                                    <div className="col-md-4">
                                        <Button className="btn btn-danger" onClick= {() => removeItem(item.idProd)}>Eliminar</Button>
                                    </div>    
                                </div>
                            )
                        }
                        <h4>Total compra: ${calcTotalPrice()}</h4>
                        <Button className="btn btn-danger" onClick= {clearCart}>Vaciar carrito</Button>
                        <Button className="btn btn-primary" onClick={crearOrden}>Confirmar Orden</Button>
                    </>

                    // Si tengo 0 items
                    : <p>El carrito se encuentra vacío</p>
                }    
            </div>
        </div>
    </div>
    </>
    )
}
export default Cart