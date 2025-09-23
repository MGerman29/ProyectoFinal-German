import { useParams } from "react-router-dom"
import ItemDetailContainer from "../containers/ItemDetailContainer"
import { useProduct } from "../hooks/useProducts"

export default function ItemDetailPage() {
    const { id } = useParams()
    const { data: product, loading } = useProduct(id)
    return <ItemDetailContainer product={product} loading={loading} />
}
