import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"

const ItemListContainer = () => {
    const [productos, setproductos] = useState([])
    const { idCategoria } = useParams()
    useEffect(() => {
        const conexionFirebase = async () => {
            let q
            if (idCategoria) {
                q = query(collection(db, "products"), where("categoria", "==" , idCategoria)) //Trae categoria elegida
            } else { 
                q = query(collection(db, "products")) //Trae todos los producos del catalogo
            }
            const queryDocsProducts = await getDocs(q)
            const products = queryDocsProducts.docs.map((doc) => (
                {
                    idProd: doc.id,
                    ...doc.data()
                }))
            return products
        }
        conexionFirebase()
            .then (result => setproductos(result))
            .catch (err => console.log(err))
    }, [idCategoria])

    return (
        <Container className="d-flex flex-wrap justify-content-center gap-4 mt-5">
            <ItemList items= {productos} />
        </Container>
    )
}
export default ItemListContainer