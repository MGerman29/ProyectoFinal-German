import { useParams } from "react-router-dom"
import ItemListContainer from "../containers/ItemListContainer"
import { useProducts } from "../hooks/useProducts"

export default function Home() {
    const { categoryId } = useParams()
    const { data: products, loading } = useProducts(categoryId)
    return <ItemListContainer products={products} loading={loading} />
}
