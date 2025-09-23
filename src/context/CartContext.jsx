import { createContext, useContext, useMemo, useState, useEffect } from 'react'

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

const STORAGE_KEY = 'sneakrs_cart_v1'

// Carga inicial segura desde localStorage
function loadInitialCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  // ⬇️ inicializamos desde localStorage una sola vez
  const [items, setItems] = useState(loadInitialCart)

  // ⬇️ cada vez que cambia el carrito, persistimos
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // si el usuario tiene bloqueado storage, simplemente lo ignoramos
    }
  }, [items])

  // (opcional) sincroniza entre pestañas
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        setItems(loadInitialCart())
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const addItem = (product, qty) => {
    setItems(curr => {
      const i = curr.findIndex(p => p.id === product.id)
      if (i !== -1) {
        const copy = [...curr]
        const nextQty = Math.min(copy[i].quantity + qty, product.stock)
        copy[i] = { ...copy[i], quantity: nextQty }
        return copy
      }
      // Guardamos solo lo necesario (id, title, price, thumbnail, stock, quantity)
      const { id, title, price, thumbnail, stock } = product
      return [...curr, { id, title, price, thumbnail, stock, quantity: qty }]
    })
  }

  const removeItem = (id) => setItems(curr => curr.filter(p => p.id !== id))
  const clear = () => setItems([]) // al vaciar, el effect guarda []

  const totalUnits = useMemo(() => items.reduce((acc, p) => acc + p.quantity, 0), [items])
  const totalPrice = useMemo(() => items.reduce((acc, p) => acc + p.quantity * p.price, 0), [items])

  const value = { items, addItem, removeItem, clear, totalUnits, totalPrice }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
