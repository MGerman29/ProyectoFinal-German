import { useEffect, useState } from 'react'
import { fetchProducts, fetchProductById } from '../services/firebase'


export function useProducts(categoryId) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        let alive = true
        setLoading(true)
        fetchProducts(categoryId).then(p => { if (alive) setData(p) }).finally(() => alive && setLoading(false))
        return () => { alive = false }
    }, [categoryId])


    return { data, loading }
}


export function useProduct(id) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        let alive = true
        setLoading(true)
        fetchProductById(id).then(p => { if (alive) setData(p) }).finally(() => alive && setLoading(false))
        return () => { alive = false }
    }, [id])


    return { data, loading }
}